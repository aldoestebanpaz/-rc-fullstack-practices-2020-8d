import React from 'react';
import './App.css';
import Card from './components/Card';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      cards: [
        // { id: 1, title: "Card title that wraps to a new line", description: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." },
        // { id: 2, title: "Card title that wraps to a new line", description: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." },
        // { id: 3, title: "Card title that wraps to a new line", description: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." },
        // { id: 4, title: "Card title that wraps to a new line", description: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." },
        // { id: 5, title: "Card title that wraps to a new line", description: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." },
        // { id: 6, title: "Card title that wraps to a new line", description: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." },
      ]
    };
  }

  clickHandler = () => {
    const cards = this.state.cards;
    cards.push({ id: cards.length + 1, title: 'new card', description: 'card description'});
    this.setState({ cards });
  }

  removeCard = (id) => {
    let cards = this.state.cards;
    cards = cards.filter(item => item.id !== id);
    this.setState({ cards });
  }

  createCardComponents() {
    return this.state.cards.map(c => <Card cardData={c} key={c.id} remove={this.removeCard} />);
  }

  render() {

    const cardComponents = this.createCardComponents();

    return (
      <div className="container">
        <div className="row">
          <button onClick={this.clickHandler}>Add another card</button>
        </div>
        <div className="row">
          <div className="card-columns">

  
  
            {cardComponents}
  
  
  
  
          </div>
        </div>
      </div>
    );
  }
}

export default App;
