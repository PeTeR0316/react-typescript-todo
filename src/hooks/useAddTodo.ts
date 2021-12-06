import { useDispatch } from 'react-redux';
import { useCallback  } from 'react';
import { addTodo } from '../modules/todos'


export default function useAddTodo() {
    const dispatch = useDispatch();

    return useCallback(title => dispatch(addTodo(title)), [dispatch]);
}