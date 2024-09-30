import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';

const getTodaysDate = () => {
    const today = new Date();
    return today.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
};

const todayDate = getTodaysDate();

const LessonsPage = () => {
    const [lessons, setLessons] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLessons = async () => {
            try {
                const response = await fetch('http://192.168.1.4:3000/lessons');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setLessons(data);
            } catch (error) {
                console.error('Error fetching lessons:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchLessons();
    }, []);

    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollViewContainer}
            >
                {/* Header */}
                <View style={styles.headerContainer}>
                    <Text style={styles.dateText}>{todayDate}</Text>
                    <Text style={styles.headerTitle}>Today's Lessons</Text>
                </View>

                {/* Top Lesson Section */}
                {lessons.length > 0 && (
                    <TouchableOpacity
                        style={styles.topNewsCard}
                        onPress={() => console.log('Navigating to the Top Lesson')}
                    >
                        <Image
                            source={{ uri: lessons[0].image }}
                            style={styles.topNewsImage}
                        />
                        <Text style={styles.topNewsTitle}>{lessons[0].title}</Text>
                    </TouchableOpacity>
                )}

                {/* Other Lessons Section */}
                <Text style={styles.recentNewsHeader}>Other Lessons</Text>
                {lessons.slice(1).map((lesson, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.recentNewsCard}
                        onPress={() => console.log(`Navigating to ${lesson.title}`)}
                    >
                        <Image
                            source={{ uri: lesson.image }}
                            style={styles.recentNewsImage}
                        />
                        <Text style={styles.recentNewsTitle}>{lesson.title}</Text>
                        <Text style={styles.recentNewsAuthorDate}>Time: {lesson.date_time}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
    },
    scrollViewContainer: {
        alignItems: 'center',
    },
    headerContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    dateText: {
        color: '#b0b0b0',
        fontSize: 16,
    },
    headerTitle: {
        fontSize: 30,
        paddingTop: 20,
        fontWeight: 'bold',
    },
    topNewsCard: {
        width: '100%',
        padding: 20,
    },
    topNewsImage: {
        width: '100%',
        height: 250,
        borderRadius: 10,
        marginBottom: 10,
    },
    topNewsTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    recentNewsHeader: {
        fontSize: 22,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        marginLeft: 20,
        marginBottom: 10,
    },
    recentNewsCard: {
        width: '90%',
        marginBottom: 20,
    },
    recentNewsImage: {
        width: '100%',
        height: 120,
        borderRadius: 10,
    },
    recentNewsTitle: {
        fontSize: 18,
        marginTop: 5,
    },
    recentNewsAuthorDate: {
        fontSize: 14,
        color: '#666',
        marginBottom: 10,
    },
});

export default LessonsPage;
