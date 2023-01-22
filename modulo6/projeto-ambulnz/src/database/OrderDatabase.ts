import { IOrderDB, IOrderItemDB, Order } from "../models/Order"
import { BaseDatabase } from "./BaseDatabase"
import { PizzaDatabase } from "./PizzaDatabase"

export class OrderDatabase extends BaseDatabase {
    public static TABLE_ORDERS = "Amb_Orders"
    public static TABLE_ORDER_ITEMS = "Amb_Order_Items"

    public createOrder = async (orderID: string): Promise<void> => {
        await BaseDatabase
            .connection(OrderDatabase.TABLE_ORDERS)
            .insert({
                id: orderID
            })
    }

    public insertItemOnOrer = async (orderItem:IOrderItemDB): Promise<void> =>{
        await BaseDatabase
            .connection(OrderDatabase.TABLE_ORDER_ITEMS)
            .insert(orderItem)
    }

    public getPrice =async (pizzaName:string): Promise<number | undefined> => {
       const result: any[] = await BaseDatabase
            .connection(PizzaDatabase.TABLE_PIZZAS)
            .select("price")
            .where({name: pizzaName})

        return result[0].price as number
    }
}