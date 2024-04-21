/* eslint-disable */
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>
      <ScrollView horizontal={true} style={styles.mainContainer}>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.elevatedContent}>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.elevatedContent}>me</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.elevatedContent}>to</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.elevatedContent}>scroll</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.elevatedContent}>more...</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.elevatedContent}>😊</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  mainContainer: {
    padding: 8,
  },
  card: {
    width: 100,
    height: 100,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 10,
  },
  cardElevated: {
    backgroundColor: '#cad5e2',
    // elevation: 10,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowColor: '#333',
    shadowOpacity: 0.7, //0-1
    shadowRadius: 2,
  },
  elevatedContent: {
    color: '#000000',
  },
});
