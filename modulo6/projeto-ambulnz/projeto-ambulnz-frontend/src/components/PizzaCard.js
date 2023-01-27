import styled from "styled-components"

export const ContainerLi = styled.li`
    border: 1px solid black;
    margin: 1em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 4px 4px #ff5252;
    border-radius: 8px;
    background-color: white;
    p{
        font-size: 12px;
        margin-left: 5PX;
    }
    h3{
        text-align: center;
    }
    
    button{
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid black;
        border-radius: 3px;
        user-select: none;
        white-space: nowrap;
        :hover {
            background-color: #ff5252;
            transition: 0.15s ease;
            cursor: pointer;
            font-weight: bold;
        } 
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