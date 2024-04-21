/* eslint-disable */
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function ActionCards() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.elevatedCard, styles.card]}>
        <Image
          style={styles.cardImage}
          source={{uri: 'https://i.ytimg.com/vi/YwHJCTXg6Es/maxresdefault.jpg'}}
        />
        <View style={styles.bodyContainer}>
          <View style={styles.headingContainer}>
            <Text style={styles.headerText}>
              What's new in JavaScript 21 - ES12
            </Text>
          </View>
          <Text style={styles.cardDescription} numberOfLines={3}>
            The replace() method in Javascript ES12 adds a new feature called
            regex. The replaceAll() method allows you to replace all occurrences
            of a pattern without using a Regular Expression. Though you can use
            a Regular Expression, it can be complicated. The ReplaceAll() method
            is a convenient solution for such situations
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() =>
              openWebsite(
                'https://manishjohar17.medium.com/whats-new-in-javascript-21-es12-b49ee10a9ad9',
              )
            }
            style={styles.socailLink}>
            <Text style={styles.footerText}>Read More...</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              openWebsite(
                'https://manishjohar17.medium.com/whats-new-in-javascript-21-es12-b49ee10a9ad9',
              )
            }
            style={styles.socailLink}>
            <Text style={styles.footerText}>Follow Me</Text>
          </TouchableOpacity>
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
  elevatedCard: {},
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    margin: 10,
  },
  headingContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
  },
  headerText: {color: '#000000', fontWeight: 'bold', fontFamily: 'Roboto'},
  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  bodyContainer: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardDescription: {
    color: '#000000',
    fontSize: 12,
    marginBottom: 6,
    flexShrink: 1,
  },
  cardFooter: {color: '#000000'},
  footerContainer: {
    padding: 8,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  socailLink: {
    backgroundColor: '#948979',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 5,
  },
  footerText: {color: '#ffffff'},
});
