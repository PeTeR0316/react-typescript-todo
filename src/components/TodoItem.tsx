import React from 'react';
import { Todo } from '../modules/todos';
import useDeleteTodo from '../hooks/useDeleteTodo';

type TodoItemProps = {
    todo: Todo
}

const TodoItem = ({todo}: TodoItemProps) => {
    const deleteTodo = useDeleteTodo();

    return (
        <div className="todoItem">
            <li>
                <span>{todo.index}</span>
                <span>{todo.title}</span>
                <span onClick={() => deleteTodo(todo.index)}>삭제</span>
            </li>
        </div>
    )
}

export default TodoItem;