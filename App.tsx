import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCard from './components/FancyCard';
import ActionCards from './components/ActionCards';
import ContactList from './components/ContactList';

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <FlatCards />
          <ElevatedCards />
          <Text style={styles.headingText}>Trending Places</Text>
          <ScrollView horizontal={true}>
            <FancyCard imageUrl="https://upload.wikimedia.org/wikipedia/commons/d/d1/Ram_Janmbhoomi_Mandir%2C_Ayodhya_Dham.jpg" />
            <FancyCard imageUrl="https://static.toiimg.com/img/100273065/Master.jpg" />
            <FancyCard imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Tirumala_090615.jpg/800px-Tirumala_090615.jpg" />
          </ScrollView>
          <ActionCards />
          <ContactList />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});
