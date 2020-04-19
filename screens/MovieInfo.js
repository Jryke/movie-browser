import React from 'react';
import { View, Text } from 'react-native';

const MovieInfo = (props) => {
  return (
    <View>
      <Text>{props.movie.Title}</Text>
    </View>
  );
};

export default MovieInfo;