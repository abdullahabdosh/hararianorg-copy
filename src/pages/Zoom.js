import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator, Image, TouchableOpacity, Linking } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons/faFacebookSquare';
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons/faInstagramSquare';
import { faTiktok } from '@fortawesome/free-brands-svg-icons/faTiktok';
import Footer from '../components/Footer';


export default class Zoom extends Component {
  state = {
    lessons: [],
    loading: true
  };

  componentDidMount() {
    this.fetchLessons();
  }

  fetchLessons = async () => {
    try {
      const response = await fetch('http://192.168.1.4:3000/lessons'); // make sure to change this if using a different network
      if (!response.ok) {
        throw new Error(`HTTP status ${response.status}`);
      }
      const lessons = await response.json();
      this.setState({ lessons, loading: false });
    } catch (error) {
      console.error('Error fetching lessons:', error.message);
      this.setState({ loading: false });
    }
  };
  

  render() {
    const { lessons, loading } = this.state;

    if (loading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <Text style={styles.header}>Available Lessons</Text>
        <ScrollView>
          {lessons.map((lesson, index) => (
            <View key={index} style={styles.lesson}>
              <Text style={styles.title}>{lesson.title}</Text>
              <Image source={{ uri: lesson.image }} style={styles.image} />
              <Text style={styles.description}>{lesson.description}</Text>
              <Text style={styles.dateTime}>Time: {lesson.date_time}</Text>
              <Text style={styles.zoomLink}>Zoom Link: {lesson.zoom_link}</Text>
              <Text style={styles.meetingID}>{lesson.meeting_id}</Text>
              <View style={styles.socialPlatforms}>
                {/* facebook icon with the link*/}
                <TouchableOpacity onPress={() => Linking.openURL(lesson.social_platforms.facebook)}>
                <FontAwesomeIcon icon={faFacebookSquare} size={30} color="#3b5998" />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => Linking.openURL(lesson.social_platforms.instagram)}>
              <FontAwesomeIcon icon={faInstagramSquare} size={30} color="#3b5998" />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => Linking.openURL(lesson.social_platforms.tiktok)}>
                <FontAwesomeIcon icon={faTiktok} size={30} color="#3b5998" />
              </TouchableOpacity>
              </View>
            </View>
          ))}
          
        </ScrollView>
        <Footer> </Footer>
      </View>

    );
    
  }
  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 20,  // Added padding top for better spacing from the top of the screen
  },
  header: {
    fontSize: 24,  // Increased size for better visibility
    fontWeight: 'bold',  // Added weight
    marginBottom: 20,
    textAlign: 'center',
  },
  lesson: {
    marginBottom: 20,
    padding: 20,  // Increased padding for better spacing within cards
    backgroundColor: '#f9f9f9',
    borderRadius: 10,  // Increased radius for a smoother look
    width: '90%',  // Adjusted width for better alignment
    alignSelf: 'center',  // Align center to ensure it aligns well in the parent
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,  // Adjusted bottom padding
  },
  image: {
    width: '100%',
    height: 200,  // Adjusted height for a better aspect ratio
    borderRadius: 5,  // Added borderRadius to image
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  dateTime: {
    fontSize: 14,
    marginBottom: 10,
  },
  zoomLink: {
    fontSize: 14,
    marginBottom: 10,
    color: '#1a0dab',  // Added color to highlight link
  },
  meetingID: {
    fontSize: 14,
    marginBottom: 10,
  },
  socialPlatforms: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',  // Ensure social icons span the width of the card
  },
});

