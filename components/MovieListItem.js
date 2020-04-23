import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const MovieListItem = (props) => {
  const onSelectMovie = () => {
    props.setSelectedMovie(props.movie);
    props.navigation.navigate('Info', { movie: props.movie });
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onSelectMovie}>
        <Text style={styles.title}>{props.movie.Title}</Text>
        <Text style={styles.textRow}>{props.movie.Year} {props.movie.Type}</Text>
      </TouchableOpacity>
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

MovieListItem.propTypes = {
  movie: PropTypes.objectOf(PropTypes.string),
  setSelectedMovie: PropTypes.func,
  navigation: PropTypes.objectOf(PropTypes.func)
}

export default MovieListItem;