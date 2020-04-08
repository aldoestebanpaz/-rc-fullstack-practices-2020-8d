import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import ModeSelector from './components/ModeSelector';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      status: "The Application is running",
      mode: "light"
    };

    this.changeMode = this.changeMode.bind(this);
  }

  changeMode(mode) {
    console.log("Se va a cambiar el modo: de " + this.state.mode + " a " + mode);
    this.setState({ mode });
  }

  render() {
    return (
      <div className={ `App ${this.state.mode}` }>
        <ModeSelector changeMode={this.changeMode} />
        <p>
          {this.state.status}
        </p>
        <p>
          {this.state.mode}
        </p>
        <Card title="Card 1" summary="a little description" />
        <Card title="Card 2" summary="hello world" />
        <Card title="Card 3" summary="a little description" />
        <Card title="Card 4" summary="a little description" />
        <Card title="Card 5" summary="a little description" />
        <Card title="Card 6" summary="a little description" />
        <Card title="Card 7" summary="a little description" />
      </div>
    );
  }

}

export default App;
