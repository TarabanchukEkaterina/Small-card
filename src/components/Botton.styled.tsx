import styled, { css } from "styled-components";

type ButtonPropsType = {
  color?: string
  fontSize?: string
  btnType: 'primary' | 'outlined'
}

export const Button = styled.button<ButtonPropsType>`
  width: 86px;
  height: 30px;
  font-weight: 700;
  font-size: ${props => props.fontSize || '10px'};
  line-height: 2;
  border-radius: 5px;
  margin-right:10px;

  ${props => props.btnType === 'primary' && css<ButtonPropsType>`
    color: #fff;
    background: ${props => props.color || '#4e71fe'};

    &:hover {
    color: #fff;
    background: #4aa8e6;
    }
  `}
  
  ${props => props.btnType === 'outlined' && css<ButtonPropsType>`
    color: ${props => props.color || '#4e71fe'};
    border: 2px solid ${props => props.color || '#4e71fe'};
    border-radius: 5px;

    &:hover {
      color: #4aa8e6;
      border: 2px solid #4aa8e6;
      border-radius: 5px;
      background-color: transparent;
    }
  `}
`
