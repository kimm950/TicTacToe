import React from 'react'
//@ts-ignore
import styled from 'styled-components'
import { centerdFlex } from './effects';

const SqureButton = styled.div`
${centerdFlex}
  background-color: #FFA500;
  border-radius: 10px;
  float: left;
  font-size: 150px;
  font-weight: bold;
  line-height: 34px;
  width: 200px;
  height: 200px;
  margin-right: 3px;
  margin-top: 3px;
  padding: 0;
  text-align: center;
  cursor: pointer;
  transition: 0.2s;
  box-shadow: 0 1px 5px rgba(0,0,0,0.2);
  &:hover{
    transform: scale(1.1);
  }
`

interface Props {
  value?: string | null,
  onClick: () => void,
}

const Square = (props: Props) => {
  return (
    <SqureButton className="square" onClick={props.onClick}>
      {props.value}
    </SqureButton>
  );
}

export default Square;
