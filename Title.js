import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Title({ children }) {
    return (
        <View style={styles.header}>
        <Text style={styles.title}>{children}</Text>
        </View>
    );
    }

    const styles = StyleSheet.create({
        header: {
            padding: 15,
            backgroundColor: '#f4511e'
        },
        title: {
            fontSize: 24,
            color: '#fff',
            fontWeight: 'bold',
            textAlign: 'center'
        }
    });
