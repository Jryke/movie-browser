import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, View, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import { fetchMovies } from '../api';
import MovieListItem from '../components/MovieListItem';

const Home = (props) => {
  const [fetchedMovieList, setFetchedMovieList] = useState()
  
  useEffect(() => {
    getMovieList()
  }, [props.inputVal])

  const getMovieList = async () => {
    const results = await fetchMovies(props.inputVal)
    setFetchedMovieList(results)
  }
  
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        onChangeText={text => props.setInputVal(text)}
        value={props.inputVal}
        placeholder='enter movie name'
      />
      <FlatList
        data={fetchedMovieList}
        renderItem={({ item }) => (
          <MovieListItem movie={item} setSelectedMovie={props.setSelectedMovie} navigation={props.navigation} />
        )}
        keyExtractor={item => item.imdbID}
      />
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
  textInput: {
    width: 300,
    height: 30,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    marginTop: 30
  },
})

Home.propTypes = {
  inputVal: PropTypes.string,
  setInputVal: PropTypes.func.isRequired,
  setSelectedMovie: PropTypes.func.isRequired,
  movieList: PropTypes.arrayOf(PropTypes.object),
  navigation: PropTypes.objectOf(PropTypes.func)
}

export default Home;