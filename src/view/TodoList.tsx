import React from 'react';
import {View} from 'react-native';
import TodoView from './TodoView';
import {Todo} from '../models/Todo';
import {TodoTypes} from '../models/TodoTypes';

interface Props {
  todos: Array<Todo>;
  toggleComplete: (index: number) => void;
  deleteTodo: (index: number) => void;
  type: TodoTypes;
}

const TodoList = (props: Props) => {
  const getVisibleTodos = (_todos: Array<Todo>, _type: TodoTypes) => {
    switch (_type) {
      case 'All':
        return _todos;
      case 'Complete':
        return _todos.filter((t) => t.complete);
      case 'Active':
        return _todos.filter((t) => !t.complete);
    }
  };

  let todos = getVisibleTodos(props.todos, props.type)?.map((todo, _) => {
    return (
      <TodoView
        key={todo.todoIndex}
        todo={todo}
        toggleComplete={props.toggleComplete}
        deleteTodo={props.deleteTodo}
      />
    );
  });
  return <View>{todos}</View>;
};

export default TodoList;
