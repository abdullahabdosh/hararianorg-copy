import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView, Image, Linking } from 'react-native';
import Footer from '../components/Footer';
import HomeSlider from '../components/HomeSlider';
import UpcomingSlider from '../components/UpcomingSlider';
import ArticlesSlider from '../components/ArticlesSlider';

export default function HomePage() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Hararian Organization Inc. </Text>
      </View>
    
      <HomeSlider/>

      <UpcomingSlider/>

      <ArticlesSlider/>
      <Footer> </Footer>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    padding: 20,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bannerImage: {
    width: '100%',
    height: 200,
  },
  section: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 50,
  },
  sectionContent: {
    fontSize: 16,
    marginBottom: 20,
    // textAlign: 'center'
  }
});
