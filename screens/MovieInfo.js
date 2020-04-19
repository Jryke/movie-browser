import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const MovieInfo = ({ route }) => {
  const { movie } = route.params;
  return (
    <View style={styles.container}>
      <Image style={styles.poster} source={movie.Poster} />
      <Text style={styles.title}>{movie.Title}</Text>
      <Text>({movie.Year})</Text>
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
  poster: {
    width: 300,
    height: 300,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
  }
});

export default MovieInfo;