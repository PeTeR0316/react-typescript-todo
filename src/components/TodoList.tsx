import React from 'react';
import { Todo } from '../modules/todos';
import TodoItem from './TodoItem';
import useTodos from '../hooks/useTodos'

const TodoList = () => {
    const todoList: Todo[] = useTodos();

    if(todoList.length === 0) {
        return <p>등록된 내용이 없습니다.</p>;
    }

    return (
        <ul>
            {todoList.map(todo => (
                <TodoItem todo={todo} key={todo.index} />
            ))}
        </ul>
    )
};

export default TodoList;