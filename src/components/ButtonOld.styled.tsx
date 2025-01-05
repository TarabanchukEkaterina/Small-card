import styled from 'styled-components';
import {MyAnimation} from '../styles/animations/Animations';

export const Button = styled.button`
  border: none;
  background-color: #e91e63;
  padding: 10px 20px;
  color: snow;
  font-size: 2rem;
  font-weight: bold;
  border-radius: 0px;

  &:hover{
    background-color:rgb(212, 241, 117);
  }

  &:last-child{
    background-color:rgb(182, 213, 236);
  }
`

// создание компонента на основе другого компонента
export const SuperButton = styled(Button)`
  border-radius: 15px;
  background-color:rgb(30, 233, 44);
  color:rgb(74, 71, 72);

  &:hover{
    animation: ${MyAnimation} 2s ease-in-out infinite;
  }
`
// добавляем анимацию длительностью 2 сек и функцию временную