import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { search } from './mockData';
import Home from './screens/Home';
import MovieListItem from './components/MovieListItem';

export default function App() {
  const [inputVal, setInputVal] = useState('');
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    setMovieList(search.Search)
  }, []);

  console.log(movieList);

  return (
    <View style={styles.container}>
      <Home inputVal={inputVal} setInputVal={setInputVal} />
      {movieList.map(movie => <MovieListItem movie={movie} />)}
    </View>
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
