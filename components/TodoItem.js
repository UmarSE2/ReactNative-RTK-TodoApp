import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from './todosSlice';

const TodoItem = ({ id, text }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [updatedText, setUpdatedText] = useState(text);
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteTodo({ id }));
    };

    const handleUpdate = () => {
        if (updatedText !== '') {
            dispatch(updateTodo({ id, text: updatedText }));
            setIsEditing(false);
        }
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleCancelEdit = () => {
        setIsEditing(false);
        setUpdatedText(text);
    };

    return (
        <View style={styles.container}>
            {isEditing
                ? (
                    <>
                        <TextInput style={styles.input}
                            value={updatedText}
                            onChangeText={text => setUpdatedText(text)} />
                        <TouchableOpacity style={styles.button} onPress={handleUpdate}>
                            <Text style={styles.buttonText}>Save</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={handleCancelEdit}>
                            <Text style={styles.buttonText}>Cancel</Text>
                        </TouchableOpacity>
                    </>
                )
                : (
                    <>
                        <Text style={styles.text}>{text}</Text>
                        <TouchableOpacity style={styles.button} onPress={handleEdit}>
                            <Text style={styles.buttonText}>Edit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={handleDelete}>
                            <Text style={styles.buttonText}>Delete</Text>
                        </TouchableOpacity>
                    </>
                )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
    },
    text: {
        fontSize: 16,
    },
    input: {
        flex: 1,
        fontSize: 16,
        marginRight: 16,
        padding: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
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

export default TodoItem;
