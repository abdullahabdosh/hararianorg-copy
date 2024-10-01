import React from 'react';
import Swiper from 'react-native-swiper';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import landscape1 from "../components/assets/landscape1.jpg";
import landscape2 from "../components/assets/landscape2.jpg";
import landscape3 from "../components/assets/landscape3.jpg";

const { width } = Dimensions.get('window'); // Get the full width of the device

const HomeSlider = () => (
    <View style={styles.container}>
        <Swiper
            showsButtons={false}
            autoplay={true}
            autoplayTimeout={5}
            loop={true}
            style={styles.swiper}
            paginationStyle={styles.pagination}
            dotStyle={styles.dot}
            activeDotStyle={styles.activeDot}
        >
            {/* Slide 1 */}
            <View style={styles.slide}>
                <Image source={ landscape1 } style={styles.bannerImage} />
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Scenic Landscape 1</Text>
                    <Text style={styles.genre}>Nature</Text>
                </View>
            </View>
            {/* Slide 2 */}
            <View style={styles.slide}>
                <Image source={ landscape2 } style={styles.bannerImage} />
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Scenic Landscape 2</Text>
                    <Text style={styles.genre}>Nature</Text>
                </View>
            </View>
            {/* Slide 3 */}
            <View style={styles.slide}>
                <Image source={ landscape3 } style={styles.bannerImage} />
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Scenic Landscape 3</Text>
                    <Text style={styles.genre}>Nature</Text>
                </View>
            </View>
        </Swiper>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 50,
    },
    swiper: {
        height: 650, // Use the full height of the swiper area
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bannerImage: {
        height: '100%',
        width: width,
    },
    textContainer: {
        position: 'absolute',
        bottom: 50, // Adjust based on your visual requirement
        left: 0,
        right: 0,
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    title: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    genre: {
        color: 'white',
        fontSize: 16,
        marginTop: 4,
    },
    pagination: {
        position: 'absolute',
        bottom: 10, // Adjust to lift up the dots as in your image
    },
    dot: {
        backgroundColor: 'black', // Semi-transparent dot
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 3,
    },
    activeDot: {
        backgroundColor: 'white',
        width: 16,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 3,
    },
});

export default HomeSlider;
