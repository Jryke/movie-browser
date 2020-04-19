import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { search } from './mockData';
import Home from './screens/Home';

export default function App() {
  const [inputVal, setInputVal] = useState('');
  const [movieList, setMovieList] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState({});

  useEffect(() => {
    setMovieList(search.Search)
  }, []);

  return (
    <NavigationContainer>
      <View style={styles.container}>
      <Home inputVal={inputVal} setInputVal={setInputVal} movieList={movieList} setSelectedMovie={setSelectedMovie} />
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
