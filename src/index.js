import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: null,
    };
  }

  render(){
    return(
      <button className="square" onClick={() => this.setState({value: 'x'})}>
      {this.state.value}
      </button>
    );
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }
  renderSquare(i) {
    return <Square value={i} />;
}
}


// ======================================================
