import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';


class App extends Component {

  // Render : componentWillMount() -> render() -> componentDidMount()
  // update :  componentWillReceiveProps() ->  shouldComponentUpdate()==true(old, new prop 틀리면)  -> render
  //          ->  componentWillUpdate() -> componentDidMount()

  state = {}

  componentWillMount() {
    console.log('will mount')
  }

  componentDidMount() {
    this._getMovies();
   
  }


  _renderMovies = () => {
    const movies = this.state.movies.map((movie) => {
      console.log(movie)
      return <Movie 
            title={movie.title_english} 
            poster={movie.medium_cover_image} 
            key={movie.id} 
            genres={movie.genres}
            synopsis = {movie.synopsis} 
          />
    })
    return movies
  }

  _getMovies = async () => {
    const movies = await this._callApi();
    this.setState({
      movies
    })
  }

  _callApi = () => {
    return fetch ('https://yts.mx/api/v2/list_movies.json?sort_by=download_count')
    .then(potato => potato.json())
    //.then(json => console.log(json))
    .then(json => json.data.movies)
    .catch(err => console.log(err))

  }


  render() {
    console.log('render')
    return (
      <div className={this.state.movies ? "App" : "App--loading"}>
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
