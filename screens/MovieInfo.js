import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, View, Text, Image, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import RatingListItem from '../components/RatingListItem';
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
    <ScrollView style={styles.container}>
      <Image style={styles.poster} source={{uri: movieDetails.Poster}} />
      <View style={styles.row}>
        <Text style={styles.title}>{movieDetails.Title}</Text>
        <Text>({movieDetails.Year})</Text>
      </View>
      <View style={styles.row}>
        <Text>{movieDetails.Plot}</Text>
      </View>
      {
        movieDetails.Ratings.map((rating, i) => (
          <RatingListItem rating={rating} key={i}/>
        ))
      }
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    margin: 20,
  },
  poster: {
    width: 300,
    height: 450,
    alignSelf: 'center'
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