import { useDispatch } from 'react-redux';
import { useCallback  } from 'react';
import { deleteTodo } from '../modules/todos'


export default function useDeleteTodo() {
    const dispatch = useDispatch();

    return useCallback(index => dispatch(deleteTodo(index)), [dispatch]);
}