import styled from "styled-components";

export const ContainerItem = styled.li`
    display: flex;
`

function OrderItemCard(props) {
    const {pizza} = props
    return(
        <ContainerItem>
            <p>Pizza {pizza.name} - {pizza.price.toLocaleString('pt-br',{style:'currency', currency:'USD'})} X {pizza.quantity}</p>
            <button>Remover Item</button>
        </ContainerItem>
    )
}

export default OrderItemCard;