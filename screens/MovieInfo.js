import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import { fetchMovieInfo } from '../api';

const MovieLoadingScreen = () => {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color="black" />
    </View>
  )
}

const MovieInfo = ({ route }) => {
  const movieId = route.params.movie.imdbID;
  const [movieDetails, setMovieDetails] = useState();

  useEffect(() => {
    fetchMovieInfo(movieId).then(res => setMovieDetails(res))
  }, [movieId])

  if (!movieDetails) return <MovieLoadingScreen />
  return (
    <View style={styles.container}>
      <Image style={styles.poster} source={{url: movieDetails.Poster}} />
      <View style={styles.row}>
        <Text style={styles.title}>{movieDetails.Title}</Text>
        <Text>({movieDetails.Year})</Text>
      </View>
      <View style={styles.row}>
        <Text>{movieDetails.Plot}</Text>
      </View>
      {
        movieDetails.Ratings.map((rating, i) => (
          <Text style={styles.row} key={i}>{rating.Source}: {rating.Value}</Text>
        ))
      }
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  poster: {
    width: 300,
    height: 450,
  },
  row: {
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
  }
});

MovieInfo.propTypes = {
  route: PropTypes.object
}

export default MovieInfo;