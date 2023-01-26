import styled from "styled-components"

export const ContainerLi = styled.li`
    border: 1px solid black;
    margin: 1em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    p{
        font-size: 12px;
        margin-left: 5PX;
    }
    h3{
        text-align: center;
    }
`


function PizzaCard(props) {
    const {pizza, addToCart} = props

    return (
        <ContainerLi>
                <h3>{pizza.name}</h3>
                <p>{pizza.price.toLocaleString('pt-br',{style:'currency', currency:'USD'})}</p>
                <p>
                    {pizza.ingredients.map((item) =>{
                        return (
                          <span key={item}>{`${item} `}</span>
                      )
                    })}
                </p>
                <button onClick={() => addToCart(pizza)}>Adicionar no carrinho</button>
        </ContainerLi>
    )
}

export default PizzaCard