import React from 'react';
import { Provider } from 'react-redux';
import store from './components/store';
import TodoList from './components//TodoList';
import AddTodo from './components/AddTodo';

export default function App() {
  return (
    <Provider store={store}>
      <AddTodo />
      <TodoList />
    </Provider>
  );
}
