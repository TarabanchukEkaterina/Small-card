import styled from 'styled-components'
import {MyAnimation} from '../styles/animations/Animations'

export const Image = styled.img`
  width: 280px;
  height: 100%;
  object-fit: cover;/* сохранение пропорций изображения от родителя */
  border-radius: 10px;

  &:hover{
    animation: ${MyAnimation} 2s ease-in-out infinite;
  }
`