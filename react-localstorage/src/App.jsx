import React from 'react';
import './App.css';
import Card from './components/Card';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      cards: []
    };

    this.handleClickAddCard = this.handleClickAddCard.bind(this);
    this.removeMe = this.removeMe.bind(this);
  }

  componentDidMount() {
    const cards = JSON.parse(localStorage.getItem('cardsCache')) || [];
    this.setState({ cards });
  }

  componentDidUpdate() {
    localStorage.setItem('cardsCache', JSON.stringify(this.state.cards));
  }

  handleClickAddCard() {
    const newCard = [
      {
        imageUrl: "https://via.placeholder.com/286x180/3f3f3f/FFFFFF?text=Hello%20World%201",
        title: "sample title",
        summary: "sample summary"
      },
      {
        imageUrl: "https://via.placeholder.com/286x180/3f3f3f/FFFFFF?text=Hello%20World%202",
        title: "sample title",
        summary: "sample summary"
      }
    ];
    const cards = this.state.cards;
    cards.push(...newCard);

    this.setState({ cards });
  }

  removeMe(index) {
    const cards = this.state.cards;
    cards.splice(index, 1);
    this.setState({ cards });
  }

  render() {
    const cardComponents = this.state.cards.map((c, index) =>
      <Card
        key={index}
        removeMe={this.removeMe}
        index={index}
        image={c.imageUrl}
        title={c.title}
        summary={c.summary} />);

    return (
      <div className="container">
        <div className="row">

          <button onClick={this.handleClickAddCard}>Add 2 cards</button>
  
          <div className="card-columns">
            {cardComponents}
          </div>

        </div>
      </div>
    );
  }
}

export default App;
