import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './components/homeScreen'
import Movies from './components/moviesList'
import TvSeries from './components/tvSeriesList'
import ItemDetail from './components/itemDetail'

export default class App extends React.Component {
  render() {
    return (
    <AppContainer />
    );
  }
}
const AppStackNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Movies: Movies,
    TvSeries: TvSeries,
    ItemDetail: ItemDetail,
  },
  {
    initialRouteName: 'Home'
  }
);

const AppContainer = createAppContainer(AppStackNavigator);
