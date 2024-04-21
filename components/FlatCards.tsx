/* eslint-disable */
/* @ts-nocheck */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.flatMainContainer}>
        <View style={[styles.flatSubContainers, styles.cardOne]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.flatSubContainers, styles.cardTwo]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.flatSubContainers, styles.cardThree]}>
          <Text>Blue</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  flatSubContainers: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 10,
    margin: 10,
  },
  flatMainContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
  },
  cardOne: {
    backgroundColor: '#ef5354',
  },
  cardTwo: {
    backgroundColor: '#50dbb4',
  },
  cardThree: {
    backgroundColor: '#5da3f4',
  },
});
