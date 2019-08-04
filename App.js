import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Process } from './process'
import TvButton from './components/fetchTvSeries'
import MoviesButton from './components/fetchMovies'
import Movies from './components/moviesList'
import TvSeries from './components/tvSeriesList'
import SearchInput from './components/searchItem'


export default class App extends Component {
  state = {
    moviesList: [],
    tvSeriesList: [],
    text: 'Search ...'
  };

  fetchMovieHandler = () => {
    return fetch(`${Process.movie.BASE_URL}${Process.API_KEY}`)
      .then((res) => res.json())
      .then((parsedRes) => {
        const moviesArray = [];
        for (const key in parsedRes) {
          moviesArray.push(parsedRes[key]);
        }
        this.setState({
          moviesList: moviesArray[3]
        });
      })
      .catch(err => console.log(err));
  }

  fetchTVHandler = () => {
    return fetch(`${Process.tv.BASE_URL}${Process.API_KEY}`)
      .then((res) => res.json())
      .then((parsedRes) => {
        const tvSeriesArray = [];
        for (const key in parsedRes) {
          tvSeriesArray.push(parsedRes[key]);
        }
        this.setState({
          tvSeriesList: tvSeriesArray[3],
          moviesList: []
        });
      })
      .catch(err => console.log(err));
  }

  fetchMovieDetail = (text) => {
    this.state.text = text
    console.log(this.state.text)
  }

  clearInputField = () => {
    this.state.text = '';
  }

render() {
  return (
    <View style={styles.container}>
      <SearchInput 
        data={this.state.text} 
        clearInput={this.clearInputField} 
        getMovieDetail={this.fetchMovieDetail}/> 
      <MoviesButton getMovieList={this.fetchMovieHandler} />
      <TvButton getTvSeriesList={this.fetchTVHandler} />
      
      <View>
        {this.state.moviesList.length < 1 ? 
        <Text></Text> : <Movies data={this.state.moviesList}/> }
        {this.state.tvSeriesList.length < 1 ? 
        <Text>''</Text> : <TvSeries data={this.state.tvSeriesList}/> }
      </View>
    </View>
  );
}
    }

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    color: 'white',
    flex: 6,
    flexDirection: 'column'
  }
});
