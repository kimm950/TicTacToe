import styled, { css } from 'styled-components';

export const hoverAction = css`
transition: 0.3s;
&:hover{
    background-color: #000;
    color: #FFA500;
    box-shadow: none;
    border: 1px solid #FFA500;
  }
`

export const centerdFlex = css`
  display: flex;
  justify-content: center;
  align-items: center; 
`