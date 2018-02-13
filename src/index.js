import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
    return(
      <button className="square" onClick={props.onClick}>
      {props.value}
      </button>
    );
  }



class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'x': 'o';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }
  renderSquare(i) {
    return (
    <Square
      value={this.state.squares[i]}
      onClick={() => this.handleClick(i)}
    />
  );
}
render() {
  const winner = calculateWinner(this.state.squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
  status = 'Next player: ' + (this.state.iIsNext ? 'x' : 'o');
}

  return (
  <div>
    <div className="status"> {status}

</div>

    <div className="board-row">
      {this.renderSquare(0)}
      {this.renderSquare(1)}
      {this.renderSquare(2)}
    </div>
    <div className="board-row">
      {this.renderSquare(3)}
      {this.renderSquare(4)}
      {this.renderSquare(5)}
    </div>
    <div className="board-row">
      {this.renderSquare(6)}
      {this.renderSquare(7)}
      {this.renderSquare(8)}
    </div>
  </div>

  );
}
}
  function calculateWinner(square) {
    const lines = [
      [0, 1, 2],
      [0, 1, 2],
      [0, 1, 2],
      [0, 1, 2],
      [0, 1, 2],
      [0, 1, 2],
      [0, 1, 2],
      [0, 1, 2],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (square[a] && square[a] === square[b] && square[a] === square[c]) {
        return square[a];
      }
    }
    return null;
}















// ======================================================
