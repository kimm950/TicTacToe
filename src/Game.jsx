import React, { Component } from 'react';
import styled from 'styled-components'
import './App.css';
import Board from './Board'
import { hoverAction, centerdFlex } from './effects';

const GameContainer = styled.div`
  display: flex;
  flex-direction: row;
  .game-info {
  color: #FFA500;
  margin-left: 20px;
  text-align: center;
  font-size: 20px;
}
`

const HistoryButton = styled.button`
  border-radius: 5px;
  width: 181px;
  font-size: 20px;
  background-color: #FFA500;
  border-style: none;
  border: 1px solid #000;
  box-shadow: 0 1px 5px rgba(0,0,0,0.2);
  padding: 10px;
  margin: 5px;
  font-weight: bold;
${hoverAction};
`

const WinnerPage = styled.div`
  ${centerdFlex}
  flex-direction: column;
  font-size: 36px;
  color: #FFA500;
  .about-me-area {
    display: flex;
    justify-content: center;
  }
`

const Result = styled.a`
  border-radius: 5px;
  box-shadow: 0 1px 5px rgba(0,0,0,0.2);
  font-size: 36px;
  background-color: #FFA500;
  padding: 15px;
  margin: 10px;
  border: 1px solid #000;
  :visited {
    text-decoration: none;
    color: #000;
  }
${hoverAction};
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
      return (
        <WinnerPage>
          <div className='winner-text'>{'Winner: ' + winner}</div>
          <div className='about-me-area'>
            <Result href='/'>Replay ↺</Result>
            <Result href='https://github.com/kimm950' target='blank'>About Me</Result>
          </div>
        </WinnerPage>
      );
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
          <ul>{moves}
            {history.length === 10 &&
              <li><HistoryButton onClick={() => this.setState({ stepNum: 0, history: [{ squares: Array(9).fill(null) }] })}>
                Draw! Re↺
                </HistoryButton>
              </li>
            }
          </ul>
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
