import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addTodo } from './todosSlice';

const AddTodo = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleAddTodo = () => {
        dispatch(addTodo(text));
        setText('');
    };

    return (
        <>
            <Text style={styles.header}>Add You Today's Task</Text>
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    value={text}
                    onChangeText={setText}
                    placeholder="Enter a new todo"
                />
                <TouchableOpacity style={styles.button} onPress={handleAddTodo}>
                    <Text style={styles.buttonText}>Add</Text>
                </TouchableOpacity>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    header: {
        color: 'black',
        textAlign: "center",
        fontSize: 22,
        fontWeight: "bold",
        marginTop: 20,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#fff',
    },
    input: {
        flex: 1,
        padding: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 3,
        marginRight: 10,
    },
    button: {
        backgroundColor: '#2196f3',
        padding: 8,
        borderRadius: 4,
        marginLeft: 8,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default AddTodo;
