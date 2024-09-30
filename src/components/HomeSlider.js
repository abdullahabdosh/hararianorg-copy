import React from 'react';
import Swiper from 'react-native-swiper';
import { View, Text, StyleSheet, Image } from 'react-native';

const HomeSlider = () => (
    <View style={styles.container}>
        <Text style={styles.header}></Text>
        <Swiper
            showsButtons={false}
            autoplay={true}
            autoplayTimeout={5}
            loop={true}
            style={styles.swiper} // Ensure the swiper fills the required space
            paginationStyle={styles.pagination} // Custom pagination styles
            dotStyle={styles.dot}
            activeDotStyle={styles.activeDot}
        >
      <View style={styles.slide}>
      <Image source={{ uri: 'https://storage.googleapis.com/islamic_lessons_images/Nabi%20Mawlud%20Invite' }} style={styles.bannerImage} />
      </View>
      <View style={styles.slide}>
      <Image source={{ uri: 'https://storage.googleapis.com/islamic_lessons_images/Nabi%20Mawlud%20Invite' }} style={styles.bannerImage} />
      </View>
      <View style={styles.slide}>
      <Image source={{ uri: 'https://storage.googleapis.com/islamic_lessons_images/Nabi%20Mawlud%20Invite' }} style={styles.bannerImage} />
      </View>
      {/* Repeat for other slides */}
    </Swiper>
  </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 100,
    },
    header: {
        fontSize: 18,
        textAlign: 'center',
        marginVertical: 10,
    },
    swiper: {
        height: 200, // Set a fixed height for swiper
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bannerImage: {
        height: 200,
        width: '100%',
    },
    pagination: {
        position: 'absolute',
        top: 215,
    },
    dot: {
        backgroundColor: '#bbb',
        width: 40,
        height: 10,
        borderRadius: 0,
        marginHorizontal: 5,
    },
    activeDot: {
        backgroundColor: '#333',
        width: 90,
        height: 10,
        borderRadius: 0,
        marginHorizontal: 5,
    },
});

export default HomeSlider;