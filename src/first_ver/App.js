import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';
 
/*
function App() {
  return (
    <div className="App">
      
    </div>
  );
}
*/

const movieTitles = [
  "Matrix",
  "Full Metal Jacket",
  "Oldboy",
  "Star Wars"
]

const movieImages = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-3eCLGyA8IuwTeN745ypXx4CQhr8jMR3E5SNTYrs4kC8_EFih",
  "data:image/jpeg;base64,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",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS-w-E0hnRy4wOpm7azf7kPimAJYV6woL66Jfk8UKu9_AGaRssh",
 "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRmWUe3RcFk-pTUJ_mAx03WOoJxx7yU3u_-lb3wq3uLQbxtCJXT" 
]



const movies = [
  {
    title: "Matrix",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-3eCLGyA8IuwTeN745ypXx4CQhr8jMR3E5SNTYrs4kC8_EFih"
  }
]


class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie title={movieTitles[0]} poster={movieImages[0]}/>
        <Movie title={movieTitles[1]} poster={movieImages[1]}/>
        <Movie title={movieTitles[2]} poster={movieImages[2]}/>
        <Movie title={movieTitles[3]} poster={movieImages[3]}/>
      </div>
    )
  }
}

export default App;
