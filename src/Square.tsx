import React from 'react'
//@ts-ignore
import styled from 'styled-components'

const SqureButton = styled.div`
  background-color: #FFA500;
  display: flex;
  justify-content: center;
  align-items: center;
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
  box-shadow: 0 1px 10px rgba(0,0,0,0.2);
  transition: 0.2s;
  &:hover{
  box-shadow: none;
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
