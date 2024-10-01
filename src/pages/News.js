import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation if needed
import articles from "../components/data/articles";

const getTodaysDate = () => {
    const today = new Date();
    return today.toLocaleDateString('en-US', {
        weekday: 'long', // "Monday"
        year: 'numeric', // "2024"
        month: 'long', // "June"
        day: 'numeric' // "9"
    });
};

const todayDate = getTodaysDate();

const News = () => {
    const navigation = useNavigation(); // Use this line if navigation isn't directly passed as a prop

    return (
        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollViewContainer}
            >
                {/* Header */}
                <View style={styles.headerContainer}>
                    <Text style={styles.dateText}>{todayDate}</Text>
                    <Text style={styles.headerTitle}>Top News</Text>
                </View>

                {/* Top News Section */}
                <TouchableOpacity
                    style={styles.topNewsCard}
                    onPress={() => navigation.navigate('HilalArticle', { article: articles[0] })} // Assuming articles[0] is the top news
                >
                    <Image
                        source={{ uri: 'https://storage.googleapis.com/islamic_lessons_images/Nabi%20Mawlud%20Invite' }}
                        style={styles.topNewsImage}
                    />
                    <Text style={styles.topNewsTitle}>Top startups that are changing the way we travel</Text>
                </TouchableOpacity>

                {/* Recent News Section */}
                <Text style={styles.recentNewsHeader}>Recent News</Text>
                {articles.map((article, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.recentNewsCard}
                        onPress={() => navigation.navigate('HilalArticle', { article })}
                    >
                        <Image
                            source={{ uri: article.imageUrl }}
                            style={styles.recentNewsImage}
                        />
                        <Text style={styles.recentNewsTitle}>{article.title}</Text>
                        <Text style={styles.recentNewsAuthorDate}>{article.author} - {article.date}</Text>
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
        paddingTop: 70,
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

export default News;
