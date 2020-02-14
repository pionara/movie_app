import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';


class App extends Component {

  // Render : componentWillMount() -> render() -> componentDidMount()
  // update :  componentWillReceiveProps() ->  shouldComponentUpdate()==true(old, new prop 틀리면)  -> render
  //          ->  componentWillUpdate() -> componentDidMount()

  componentWillMount() {
    console.log('will mount')
  }

  componentDidMount() {
   /*
    console.log('did mount')
    setTimeout(() => {
      this.setState({
        greeting: 'Hello again!'
      })
    }, 5000)
    //*/
    //setTimeout(function(){console.log('hello')}, 1000)
    setTimeout(() => {
      //console.log('hello')
      this.setState({
        movies: [
          ...this.state.movies,
          {
            title: "parasite", 
            poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTjSbEnPrnX6Dv49FgZhheHqITRLIOAEGDoGEFnVA3O9tNL5eWh"
          }
        ]
      })
    }, 3000)
  }


  state = {
    greeting: 'Hello!',
    movies: [
      {
        title: "Matrix",
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-3eCLGyA8IuwTeN745ypXx4CQhr8jMR3E5SNTYrs4kC8_EFih"
      },
      {
        title: "Full",
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTjSbEnPrnX6Dv49FgZhheHqITRLIOAEGDoGEFnVA3O9tNL5eWh"
     },
      {
        title: "Oldboy",
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS-w-E0hnRy4wOpm7azf7kPimAJYV6woL66Jfk8UKu9_AGaRssh"
      },
      {
        title: "Star",
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRmWUe3RcFk-pTUJ_mAx03WOoJxx7yU3u_-lb3wq3uLQbxtCJXT"
      }
    
    ]
    
  }

  render() {
    console.log('render')
    return (
      <div className="App">
        {this.state.greeting}
        {this.state.movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index} />
        })}
      </div>
    );
  }
}

export default App;
