/* eslint-disable */
import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard(porps: any) {
  const {imageUrl} = porps;
  return (
    <View>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: `${imageUrl}`,
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Ayodhya Temple</Text>
          <Text style={styles.cardLabel}>Uttar Pradesh, India.</Text>
          <Text style={styles.cardDescription}>
            Ayodhya used to be the capital of the ancient Kosala Kingdom. Owing
            to the belief as the birthplace of Bhagwan Shri Ram, Ayodhya
            (Awadhpuri) has been regarded as first one of the seven most
            important pilgrimage sites (Mokshdayini Sapt Puris) for Hindus.
          </Text>
          <Text style={styles.cardFooter}>14Hr 45Mins Away</Text>
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
    marginBottom: 10,
  },
  card: {
    height: 360,
    width: 350,
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 17,
  },
  cardElevated: {
    backgroundColor: '#ffffff',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 4,
  },
  cardLabel: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 4,
  },
  cardDescription: {
    color: '#242b2e',
    fontSize: 12,
    marginBottom: 6,
    flexShrink: 1,
  },
  cardFooter: {color: '#000000'},
});
