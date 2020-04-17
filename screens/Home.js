import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

const Home = (props) => {

  return (
    <View>
      <Text style={styles.header}>Home</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={text => props.setInputVal(text)}
        value={props.inputVal}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: 500,
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