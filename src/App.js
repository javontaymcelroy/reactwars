import React, { Component } from 'react';
import './App.css';
import StarWarsList from './components/StarWarsList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
      <div className="navigation">
        <div className="links">
          <a href="http://reactwars.netlify.com">Home</a>
          <a href="http://reactwars.netlify.com">Courses</a>
          <a href="http://reactwars.netlify.com">Curriculum</a>
          <a href="http://reactwars.netlify.com">About Us</a>
        </div>
        <div>
          <button>Enroll</button>
        </div>
      </div>
      <div className="hero">
        <h1 className="Header">ReactWars: Academy</h1>
        <img src="https://i.ibb.co/BwXZRqQ/logo.png" alt="star_wars" className="logo"/>
        <h1 className="hero-tag">Enroll at ReactWars: Academy today!</h1>
        <p className="hero-undertag">We Test You To The Breaking Point To Make You The Strongest React Dev. Avaliable!</p>
      </div>
      <div className="Alumni-section">
      <h2 className="Alumni-title">Our Alumni</h2>
      <p className="Alumni-tagline"><mark>"ReactWars: Academy has changed my life! I've made new friends, <br/> and learned so much about React! It's WILD!" - Luke S. - Class of 1810 A.D.</mark></p>
      <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/32571842690761.5abecd0ca1cc2.jpg" alt="star_wars" className="Alumni" />
      <StarWarsList chars = {this.state.starwarsChars} />
      </div>
      </div>
    );
  }
}

export default App;