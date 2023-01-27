import OrderItemCard from "../components/OrderItemCard"
import styled from "styled-components"

export const ContainerSections = styled.section`
    border: 1px solid black;
    width: 30em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h1{
        font-size: 1.5em ;
        text-align: center;
    }
    h4{
        text-align: center;
    }
`


function OrderSummary(props) {
    const {cart, removeFromCart,total, confirmOrder} = props

return (
    <ContainerSections>
        <h1>Resumo do Pedido</h1>

        {cart.map((pizza) => {
            return (
                <>
                <OrderItemCard key={pizza.name} removeFromCart={removeFromCart} pizza={pizza}/>
                <hr/>
                </>
            )
        })}


        <h4>Total: {total.toLocaleString('pt-br',{style:'currency', currency:'USD'})}</h4>
        <button onClick={confirmOrder}>Confirmar Pedido</button>
    </ContainerSections>
)
}


export default OrderSummary