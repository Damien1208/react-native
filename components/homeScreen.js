import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, FlatList, ScrollView, TouchableWithoutFeedback, ImageBackground } from 'react-native';
import { SearchBar } from 'react-native-elements';
import SearchResults from './searchResults';
import TvSeriesButton from './buttonTvSeries';
import MoviesButton from './buttonMovies';
import { API_KEY } from 'react-native-dotenv';
import Trending from './trending';



class HomeScreen extends Component {
    static navigationOptions = {
        header: null
    };

    state = {
        moviesList: [],
        tvSeriesList: [],
        searchResult: [],
        search: ''
    };

    componentWillMount() {
        this.fetchMovieHandler()
        this.fetchTVHandler()
    }

    fetchMovieHandler = () => {
        return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`)
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
        return fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}`)
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

    fetchMovieSearch = () => {
        if (this.state.length < 2) return;

        return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${this.state.search}`)
            .then((res) => res.json())
            .then((parsedRes) => {
                const searchResultArray = [];
                for (const key in parsedRes) {
                    searchResultArray.push(parsedRes[key]);
                }
                this.setState({
                    searchResult: searchResultArray[3]
                })
            })
            .then(this.state.search = '')
            .catch(err => console.log(err));
    }

    updateSearch = search => {
        this.setState({ search });
        this.fetchMovieSearch()
    };

    goToDetail = (item) => {
        return item
    }

    render() {
        let movieSearch;
        if(this.state.search.length >= 3) {
           movieSearch = <SearchResults 
           data={this.state.searchResult} 
           actionOnRow={this.goToDetail}
           title={this.state.search}
           navigate={this.props.navigation.navigate}
           />
        }

        return (

            <View style={styles.container}>
                <Text style={styles.text}>Myflix</Text>
                    <SearchBar
                        platform="android"
                        round
                        cancelIcon
                        lightTheme
                        placeholder="Search..."
                        onChangeText={this.updateSearch}
                        value={this.state.search}
                    />
                    <View style={styles.menu}>
                        <MoviesButton 
                            style={styles.button}
                            navigate={this.props.navigation.navigate}  
                            data={this.state.moviesList} 
                            actionOnRow={this.goToDetail}
                        />
                       
                       <ScrollView>
                            <View>
                                <FlatList
                                style={{flex: 1}}
                                horizontal={true}
                                data={this.state.moviesList}
                                renderItem={({ item }) => (
                                    <View style={{flex: 1, flexDirection: 'column'}}>
                                        <Image source={
                                            { uri: `https://image.tmdb.org/t/p/w200/${item.poster_path}` }
                                            }
                                            style={styles.list} key={item.id}></Image>
                                        <Text style={{color: 'white'}}>{item.title.length > 20 ? item.title.slice(0, 20)+'...' : item.title}</Text>
                                    </View>
                                )}
                                keyExtractor={item => item.id.toString()}
                                ></FlatList>
                            </View>
                        </ScrollView>

                        <TvSeriesButton
                            style={styles.button}
                            navigate={this.props.navigation.navigate}  
                            data={this.state.tvSeriesList} 
                            actionOnRow={this.goToDetail}   
                        />
                        
                        <ScrollView>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <FlatList
                                style={{flex: 1}}
                                horizontal={true}
                                data={this.state.tvSeriesList}
                                renderItem={({ item }) => (
                                    <View style={{flex: 1, flexDirection: 'column'}}>
                                        <Image source={
                                            { uri: `https://image.tmdb.org/t/p/w200/${item.poster_path}` }
                                            }
                                            style={styles.list} key={item.id}></Image>
                                        <Text style={{color: 'white'}}>{item.name.length > 20 ? item.name.slice(0, 20) + '...' : item.name}</Text>
                                    </View>
                                )}
                                keyExtractor={item => item.id.toString()}
                                ></FlatList>
                            </View>
                        </ScrollView>
                        <Trending />
                    </View>
                    {movieSearch}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        color: 'white',
        flex: 6,
        flexDirection: 'column',
        marginBottom: 0,
        paddingBottom: 3
    },
    text: {
        marginTop: 45,
        fontSize: 38,
        color: 'red',
        textAlign: 'center',
        letterSpacing: 4,
        fontWeight: '500',
        fontStyle: "italic",
        marginBottom: 15
    },
    button: {
        marginLeft: 6,
        marginRight: 6,
        marginTop: 6
    },
    menu: {
        flex: 5,
        flexDirection: "column"
    },
    list: {
        height: 100,
        width: 190,
    }
});

export default HomeScreen;
