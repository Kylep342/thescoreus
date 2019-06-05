import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const pointValues = {
  A: 1,
  B: 3,
  C: 3,
  D: 2,
  E: 1,
  F: 4,
  G: 2,
  H: 4,
  I: 1,
  J: 8,
  K: 5,
  L: 1,
  M: 3,
  N: 1,
  O: 1,
  P: 3,
  Q: 10,
  R: 1,
  S: 1,
  T: 1,
  U: 1,
  V: 4,
  W: 4,
  X: 8,
  Y: 4,
  Z: 10
};

class Tile extends React.Component {
  render() {
    const letter = this.props.value;
    const score = pointValues[letter.toUpperCase()];
    return (
      <div className="Tile">
        <div className="letter">
          {this.props.value}
          <sub className="pointValue">{score}</sub>
        </div>
      </div>
    );
  }
}

class Word extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
  }
  renderTile(letter, index) {
    return <Tile value={letter.toUpperCase()} key={index} />;
  }
  renderWordScore(letters) {
    let total = 0;
    for (let letter of letters) {
      total += pointValues[letter.props.value];
    }
    return total;
  }

  render() {
    const letters = this.props.value.split("").map((letter, i) => {
      return this.renderTile(letter, i);
    });
    const wordScore = this.renderWordScore(letters);

    return (
      <div>
        <div className="Word">{letters}</div>
        <div className="WordScore">
          {isNaN(wordScore)
            ? "Please enter a single word without spaces."
            : wordScore
            ? `Word Score: ${wordScore}`
            : ""}
        </div>
      </div>
    );
  }
}

class InputBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  renderWord(word) {
    return <Word value={word} />;
  }

  render() {
    return (
      <div className="center">
        <div className="center half">
          <input
            className="InputBox"
            type="text"
            onChange={this.handleChange}
          />
        </div>
        <div className="center">
          <Word value={this.state.value} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<InputBox value={""} />, document.getElementById("root"));
