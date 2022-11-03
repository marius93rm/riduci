import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function List({ list, onPressItem }) {
    return (
        <FlatList
            style={styles.list}
            data={list}
            keyExtractor={item => item.id}
            renderItem={({ item, index }) => (
                <TouchableOpacity onPress={() => onPressItem(index)}>
                    <Text style={styles.item}>{item.text}</Text>
                </TouchableOpacity>
            )}
        />
    );
}

const styles = StyleSheet.create({
    list: {
        backgroundColor: '#fff',
        paddingHorizontal: 15,
    },
    item: {
        padding: 15,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#eee',
    }
});
