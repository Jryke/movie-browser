import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { getRatingNumber } from '../utils';

const RatingListItem = (props) => {
  const ratingNumber = getRatingNumber(props.rating)

  return (
    <View style={styles.container}>
      <Text>{props.rating.Source}: {props.rating.Value}</Text>
      <View style={styles.ratingVisualBox}>
        <View style={{flex: ratingNumber, backgroundColor: 'green'}} />
        <View style={{flex: 100 - ratingNumber}} />
      </View>
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