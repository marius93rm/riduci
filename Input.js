import React, { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';

export default function Input({ onSubmitEditing, placeholder }) {
    const [text, setText] = useState('');
    
    return (
        <TextInput
        style={styles.input}
        onChangeText={text => setText(text)}
        onSubmitEditing={() => {
            if(!text) return; // Don't submit if empty
            onSubmitEditing(text);
            setText('');
        }}
        placeholder={placeholder}
        value={text}
        />
    );
    }

    const styles = StyleSheet.create({
        input: {
            padding: 15,
            height: 50,
        }
    });
    