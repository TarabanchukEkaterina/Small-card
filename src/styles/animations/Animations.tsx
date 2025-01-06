import { keyframes } from "styled-components";

export const MyAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(30deg);
  }
  to {
    transform: rotate(00deg);
  } 
`