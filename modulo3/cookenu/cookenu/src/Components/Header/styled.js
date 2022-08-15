import styled from "styled-components";
import { primaryColor,neutralColor } from "../../Constants/colors";

export const HeaderContainer = styled.div`
  background-color: ${primaryColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:0 30px;
  height: 10vh;
  color: ${neutralColor};
  h1{
  text-shadow: 1px 1px 1px #957dad,
             1px 2px 1px #957dad,
             1px 3px 1px #957dad,
             1px 4px 1px #957dad,
             1px 5px 1px #957dad,
             1px 6px 1px #957dad,
             1px 10px 5px rgba(16, 16, 16, 0.5),
             1px 15px 10px rgba(16, 16, 16, 0.4),
             1px 20px 30px rgba(16, 16, 16, 0.3),
             1px 25px 50px rgba(16, 16, 16, 0.2);
    font-size:60px;
  }
`