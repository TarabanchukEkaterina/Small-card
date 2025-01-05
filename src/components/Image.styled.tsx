import styled from 'styled-components'
import {MyAnimation} from '../styles/animations/Animations'

export const Image = styled.img`
border-radius: 10px;
width: 280px;
height: 170px;
`

export const Fog = styled(Image)`
  background-color: inherit;
  position: absolute;

  &:hover{
    animation: ${MyAnimation} 2s ease-in-out infinite;
  } 
`