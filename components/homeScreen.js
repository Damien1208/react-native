import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Process } from '../process'
// import TvButton from './fetchTvSeries'
// import MoviesButton from './fetchMovies'
// import Movies from './moviesList'
// import TvSeries from './tvSeriesList'
import SearchInput from './searchItem'
import SearchResults from './searchResults'

class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Home Page',
    };

    state = {
        moviesList: [],
        tvSeriesList: [],
        text: 'Search a movie...',
        searchResult: []
    };

    componentWillMount() {
        this.fetchMovieHandler()
        this.fetchTVHandler()
    }

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
                });
            })
            .catch(err => console.log(err));
    }

    fetchMovieDetail = (text) => {
        if (text.length === 0) return;
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
                })
                    .then(this.state.text.clear());
                console.log('text', this.state.text)
            })
            .catch(err => console.log(err));
    }

    clearInputField = () => {
        this.state.text = '';
    }
    goToDetail = (item) => {
        console.log('Selected Item :', item);
    }

    render() {
       
        // const { navigate } = this.props.navigation;
        // let list;

        // if (this.state.searchResult.length) {
        //     list = <SearchResults data={this.state.searchResult} text={this.state.text} actionOnRow={this.goToDetail} />
        // } else if (this.state.moviesList.length) {
        //     list = <Movies data={this.state.moviesList} actionOnRow={this.goToDetail} />
        // } else if (this.state.tvSeriesList.length) {
        //     list = <TvSeries data={this.state.tvSeriesList} actionOnRow={this.goToDetail} />
        // } else { <Text>No results</Text> }

        return (
            <View style={styles.container}>
                <Button
                    title="go to movies"
                    onPress={ () => this.props.navigation.navigate('Movies', { movies: this.state.moviesList }) }
                ></Button>
        
                <Button
                    title="go to TV shows"
                    onPress={ () => this.props.navigation.navigate('TvSeries', { tvSeries: this.state.tvSeriesList }) }
                ></Button>


                <SearchInput
                    data={this.state.text}
                    getMovieDetail={this.fetchMovieDetail}
                />

                {/* <MoviesButton getMovieList={this.fetchMovieHandler} />
                <TvButton getTvSeriesList={this.fetchTVHandler} /> */}

                {/* <View>
                    {list}
                </View> */}
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

export default HomeScreen;
