import React, { useState } from 'react';
import { StyleSheet, FlatList, View, Text, TextInput } from 'react-native';
import MovieListItem from '../components/MovieListItem';

const Home = (props) => {
  return (
    <View>
      <Text style={styles.header}>Home</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={text => props.setInputVal(text)}
        value={props.inputVal}
      />
      <FlatList
        data={props.movieList}
        renderItem={({ item }) => <MovieListItem movie={item} selectMovie={props.setSelectedMovie} />}
        keyExtractor={item => item.imdbID}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 10,
  },
  textInput: {
    width: 300,
    height: 30,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
  },
})

export default Home;