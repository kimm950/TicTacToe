import React, { Component } from 'react';
import styled from 'styled-components'
import './App.css';
import Board from './Board'

const GameContainer = styled.div`
  display: flex;
  flex-direction: row;
  .game-info {
  margin-left: 20px;
}
`

const HistoryButton = styled.button`
  border-radius: 5px;
  font-size: 20px;
  background-color: #FFA500;
  border-style: none;
  box-shadow: 0 1px 5px rgba(0,0,0,0.2);
  padding: 10px;
  margin: 5px;
`


export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{ squares: Array(9).fill(null) }],
      xIsNext: true,
      stepNum: 0,
    }
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNum + 1);
    const current = history[history.length - 1];
    const newSquares = current.squares.slice();
    if (calculateWinner(newSquares) || newSquares[i]) {
      return;
    }
    newSquares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{ squares: newSquares }]),
      stepNum: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNum: step,
      xIsNext: (step % 2) === 0,
    });
  }

  render() {

    const history = this.state.history
    const current = history[this.state.stepNum];
    const winner = calculateWinner(current.squares)
    const moves = history.map((step, move) => {
      const desc = move ? 'Go to move #' + move : 'Go to game start';

      return (
        <li key={move}>
          <HistoryButton onClick={() => this.jumpTo(move)}>{desc}</HistoryButton>
        </li>
      );
    });
    let status
    if (winner) {
      return 'Winner' + winner
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <GameContainer>
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </GameContainer>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  var i = 0
  for (i in lines) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}