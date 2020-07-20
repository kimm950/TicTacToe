import React from 'react';
import Square from './Square';
//@ts-ignore
import styled from 'styled-components'

const BoradRow = styled.div`
  clear: both;
  content: "";
  display: table;
`

const Board = (props: any) => {

  const renderSquare = (i: number) => {
    return (
      <Square
        value={props.squares[i]}
        onClick={() => props.onClick(i)} />
    );
  }

  return (
    <div>
      <BoradRow>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </BoradRow>
      <BoradRow>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </BoradRow>
      <BoradRow>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </BoradRow>
    </div>
  );
}

export default Board;
