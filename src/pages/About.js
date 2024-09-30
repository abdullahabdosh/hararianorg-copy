import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert, SafeAreaView, ScrollView } from 'react-native';
import Footer from '../components/Footer';

export default function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    Alert.alert(`Thank you for contacting us, ${name}! We will respond to ${email} shortly.`);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.contentContainer}>
        <Text style={styles.header}>Welcome to Hararianorg</Text>
        <Text style={styles.subheader}>Contact Us</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <Button title="Submit" onPress={handleSubmit} />

        <View style={styles.section}>
        <Text style={styles.sectionTitle}>About Us</Text>
        <Text style={styles.sectionContent}>
          Established in 2000, the Hararian Organization of Australia is a not-for-profit community organisation formed by dedicated members who came together out of sincere concern for their community.
          Our primary goal is to support the integration of migrant families, and our wider community members into Australian society whilst upholding traditions, and cultural identities.
          We focus on social cohesion and integration through education programs, and social activities that run throughout the year for diverse ages.
        </Text>
        <Text style={styles.sectionContent}>
          Our organisation spreads moderation and Islamic Creed based on the teachings of Prophet Muhammad, peace be upon him, and the consensus of the four Islamic schools of Ahlus-Sunnah wal Jama'ah.
          We call for unity and peace, through promoting moderation, and warnings of extremism.
        </Text>
        <Text style={styles.sectionContent}>Over the years, the Hararian Organization has continued to provide a multitude of services providing a culturally accepted understanding for the Hararian Australian community.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Upcoming Events</Text>
        <Text style={styles.sectionContent}>Join us for various cultural and educational events throughout the year. Check our calendar for more details!</Text>
        <Button title="View Events" onPress={() => Linking.openURL('https://static1.squarespace.com/static/5e86c88fd734b52f6ab2646f/t/6537ac87d1c83230659f3c92/1698147463384/2023+Youth+Planner_Oct.pdf')} />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Get Involved</Text>
        <Text style={styles.sectionContent}>We thrive on volunteer support! Learn how you can contribute to our initiatives.</Text>
        <Button title="Volunteer" onPress={() => { /* navigation logic */ }} />
      </View>

      </ScrollView>
      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  subheader: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    width: '100%',
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
