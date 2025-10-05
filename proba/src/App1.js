import React from 'react';
import Header from './components/Header';
import logo from './logo.png';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helpText: 'Help Text',
      userData: '',
    };
    this.inputClick = this.inputClick.bind(this); // 👈 привязка контекста
  }

  // ✅ стрелочные функции — автоматически сохраняют контекст this
  inputClick = () => {
    this.setState({ helpText: 'Changed' });
    console.log('Clicked');
  };

  mouseOver = () => {
    console.log('Mouse Over');
  };

  render() {
    return (
      <div className="name">
        <Header title="Web-Site" />
        <h1>Hello React</h1>
        <h2>{this.state.userData}</h2>
        <img src={logo} alt="Logo" width="300" height="200" />
        <br />
        <input
          placeholder={this.state.helpText}
          onClick={this.inputClick}
          onMouseEnter={this.mouseOver}
          onChange={(event) => this.setState({ userData: event.target.value })}
        />
        <p>{this.state.helpText === 'Help Text' ? 'yes' : 'no'}</p>
        <MathFigure /> {/* ✅ теперь компонент реально используется */}
      </div>
    );
  }
}

class MathFigure extends React.Component {
  render() {
    return (
      <figure className="math">
        <figcaption>Math Figure Component</figcaption>
      </figure>
    );
  }
}

export default App;
