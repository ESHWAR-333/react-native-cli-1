/* eslint-disable */
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: 'Hitesh Choudhary',
      status: 'Just an extra ordinary teacher',
      imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
    },
    {
      uid: 2,
      name: 'Anurag Tiwari',
      status: 'I ❤️ To Code and Teach!',
      imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
    },
    {
      uid: 3,
      name: 'Sanket Singh',
      status: 'Making your GPay smooth',
      imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
    },
    {
      uid: 4,
      name: 'Anirudh Jwala',
      status: 'Building secure Digital banks',
      imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>contactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(each => (
          <View key={each.uid} style={styles.userCard}>
            <Image source={{uri: each.imageUrl}} style={styles.userImage} />
            <View style={styles.userDataContainer}>
              <Text style={styles.userName}>{each.name}</Text>
              <Text style={styles.userStatus}>{each.status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
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
  container: {
    paddingHorizontal: 15,
  },
  userCard: {
    flex: 1,
    width: 650,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  userImage: {
    height: 60,
    width: 60,
    borderRadius: 60 / 2,
    marginRight: 13,
  },
  userDataContainer: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
  },
  userStatus: {},
});
