import React from 'react';
import ReactDOM from 'react-dom';


class Letter extends React.Component {
    render() {
        const letter = this.props.value.toUpperCase();
        const pointValues = {
            "A": 1,
            "B": 3,
            "C": 3,
            "D": 2,
            "E": 1,
            "F": 4,
            "G": 2,
            "H": 4,
            "I": 1,
            "J": 8,
            "K": 5,
            "L": 1,
            "M": 3,
            "N": 1,
            "O": 1,
            "P": 3,
            "Q": 10,
            "R": 1,
            "S": 1,
            "T": 1,
            "U": 1,
            "V": 4,
            "W": 4,
            "X": 8,
            "Y": 4,
            "Z": 10
        }
        const score = pointValues[letter.toUpperCase()];
        return (
            <div>
                <div className="letter">
                    {this.props.value}
                </div>
                <div>
                    {score}
                </div>
            </div>
            
        );
    }
}

class Word extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }
    renderLetter(letter, index) {
        return <Letter value={letter} key={index} />;
    }

    render() {
        const letters = this.props.value.split('').map((letter, i) => {
            return this.renderLetter(letter, i);
        });
        
        return (
            <div>
                {letters}
            </div>
        );
    }
}

class InputBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    renderWord(word) {
        return <Word value={word} />;
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.handleChange}></input>
                <Word value={this.state.value} />
            </div>
        )
    }
}


ReactDOM.render(
    <InputBox value={''} />,
    document.getElementById('root')
);