import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Process } from './process'
import TvButton from './components/fetchTvSeries'
import MoviesButton from './components/fetchMovies'
import Movies from './components/moviesList'
import TvSeries from './components/tvSeriesList'
import SearchInput from './components/searchItem'
import SearchResults from './components/searchResults'


export default class App extends Component {
  state = {
    moviesList: [],
    tvSeriesList: [],
    text: 'Search a movie...',
    searchResult: []
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
    if(text.length === 0) return;
    this.state.text = text.toString();

    return fetch(`${Process.search.BASE_URL}${Process.API_KEY}&query=${this.state.text}`)
    .then((res) => res.json())
    .then((parsedRes) => {
      const searchResultArray = [];
      for (const key in parsedRes) {
        searchResultArray.push(parsedRes[key]);
      }
      this.setState({
        searchResult: searchResultArray[3]
      });
    })
    .catch(err => console.log(err));
  }

  clearInputField = () => {
    this.state.text = '';
  }


render() {
  let list;

  if (this.state.searchResult.length) {
    list = <SearchResults data={this.state.searchResult} text={this.state.text}/>
  } else if (this.state.moviesList.length) {
    list = <Movies data={this.state.moviesList}/>
  } else if (this.state.tvSeriesList.length) {
    list = <TvSeries data={this.state.tvSeriesList}/> 
  } 

  return (
    <View style={styles.container}>
      <SearchInput 
        data={this.state.text} 
        getMovieDetail={this.fetchMovieDetail}/> 
      <MoviesButton getMovieList={this.fetchMovieHandler} />
      <TvButton getTvSeriesList={this.fetchTVHandler} />
      
      <View>
        {list}
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
