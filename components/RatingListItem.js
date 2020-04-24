import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';

const RatingListItem = (props) => {
  return (
    <View style={styles.container}>
      <Text>{props.rating.Source}: {props.rating.Value}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  ratingVisualBox: {
    borderColor: 'black',
    borderWidth: 1,
    flexDirection: 'row',
    height: 20,
  },
})

RatingListItem.propTypes = {
  rating: PropTypes.objectOf(PropTypes.string),
}

export default RatingListItem;