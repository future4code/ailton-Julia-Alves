import styled from "styled-components";


export const ContainerDiv = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: auto;
    border: 8px solid red;
    border-radius: 8px;

    > div{
        position: relative;
        width: 100%;
        height: 100%;
        background-color: white;
        opacity: 1;
        padding: 10px;


        .close-popup{
        position: absolute;
        top: 0;
        left: 100%;
        transform: translateX(-5%);
        :hover{
            cursor: pointer;
            font-weight: bold;
        }
    }
    }
   
`


function OrderSuccessPopup(props) {
    const {order, closePopup} = props

    return(
    <ContainerDiv>
        <div>
            <h3>Pedido realizado com sucesso !!</h3>
            <h4>Resumo do Pedido :</h4>
            <p> Id do pedido: {order.id}</p>
            {order.pizzas.map((pizza) => (
               <p key={pizza.name}>Pizza {pizza.name} {" "}
               - {pizza.price.toLocaleString(
                    'pt-br',
                    {style:'currency', currency:'USD'}
                    )}
                    {" "} X {pizza.quantity}
                </p>
            )) }
            <p>Total pago: {order.total.toLocaleString(
                    'pt-br',
                    {style:'currency', currency:'USD'}
                    )}
            </p>
            <span onClick={closePopup} className="close-popup">X</span>
        </div>
    </ContainerDiv>
    )
}

export default OrderSuccessPopup;