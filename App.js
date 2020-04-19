import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { search } from './mockData';
import Home from './screens/Home';
import MovieInfo from './screens/MovieInfo';

const Stack = createStackNavigator();

export default function App() {
  const [inputVal, setInputVal] = useState('');
  const [movieList, setMovieList] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState({});

  useEffect(() => {
    setMovieList(search.Search)
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home'>
          {props => <Home {...props} inputVal={inputVal} setInputVal={setInputVal} movieList={movieList} setSelectedMovie={setSelectedMovie} />}
        </Stack.Screen>
        <Stack.Screen name='Info'>
          {props => <MovieInfo {...props} movie={selectedMovie} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};