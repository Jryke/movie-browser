import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const MovieListItem = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.movie.Title}</Text>
      <Text style={styles.textRow}>{props.movie.Year} {props.movie.Type}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
  },
  title: {
    fontWeight: '700',
  },
})

export default MovieListItem;