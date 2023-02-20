import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = () => {
    const todos = useSelector(state => state.todos);

    return (
        <View style={styles.container}>
            <FlatList
                style={styles.todoList}
                data={todos}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => <TodoItem id={item.id} text={item.text} />}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default TodoList;
