import { OrderDatabase } from "../database/OrderDatabase"
import { NotFoundError } from "../errors/NotFoundError"
import { ParamsError } from "../errors/ParamsError"
import { ICreateOrderInputDTO, ICreateOrderOutputDTO, IOrderItemDB} from "../models/Order"
import { IdGenerator } from "../services/IdGenerator"

export class OrderBusiness {
    constructor(
        private orderDatabase: OrderDatabase,
        private idGenerator: IdGenerator
    ) {}

    public createOrder = async (input: ICreateOrderInputDTO): Promise<ICreateOrderOutputDTO> => {

        const pizzasInput = input.pizzas

        if(pizzasInput.length === 0) {
            throw new ParamsError("Pedido vazio! Informe pelo menos uma pizza")
        }

        const pizzas = pizzasInput.map((pizza) =>{
            if(pizza.quantity <= 0){
                throw new ParamsError("Quantidade de pizza inválida! A quntidade mínima do pedido é 1")
            }
            return {
                ...pizza,
                price:0
            }
        })

        for (let pizza of pizzas) {
            const price = await this.orderDatabase.getPrice(pizza.name)

            if(!price){
                throw new NotFoundError("Pizza não existe")
            }

            pizza.price = price
        }

        const orderID = this.idGenerator.generate()

        await this.orderDatabase.createOrder(orderID)
        
        for (let pizza of pizzas){
            const orderItem: IOrderItemDB = {
                id: this.idGenerator.generate(),
                pizza_name: pizza.name,
                quantity: pizza.quantity,
                order_id: orderID
            }

            await this.orderDatabase.insertItemOnOrer(orderItem)
        }
        
        const total = pizzas.reduce(
            (acc,pizza) => (acc + (pizza.price * pizza.quantity)),
        0
    )

        const response: ICreateOrderOutputDTO ={
            message: "Pedido realizado com sucesso",
            order:{
                id: orderID,
                pizzas,
                total
             }
        }
    return response 
    }
} 