import styled from 'styled-components';
import {StyledButton} from './Botton.styled'

export const BoxModel = styled.div`
  border-radius: 15px;
  width: 300px;
  height: 350px;
  box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.1);
  background: #fff;
  padding: 10px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  ${StyledButton} {
    cursor: grab;
  }
`