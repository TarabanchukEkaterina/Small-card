import styled from 'styled-components';
import {Link} from './Link.styled';

// контейнер для кнопки
export const Box = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    cursor: pointer;
  }

  ${Link} {
    cursor: zoom-in;
  }

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`
// для всех кнопок один стиль в родителе button {
// обращение к одной компоненте внутри другой компоненты (${}интерполяция)
// адаптив для маленьких экранов @media screen and...  в самом конце бэктиков пишем медиа запросы