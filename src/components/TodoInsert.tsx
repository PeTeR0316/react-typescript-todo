import React, { ChangeEvent, FormEvent, useState } from 'react';
import useAddTodo from '../hooks/useAddTodo';
import { addTodo } from '../modules/todos';

const TodoInsert = () => {
    const [value, setValue] = useState('');
    const addTodo = useAddTodo();

    const onChange = (e: ChangeEvent<HTMLInputElement>)  => {
        setValue(e.target.value)
    };

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        addTodo(value);
        setValue(''); // 제출 후 input창 초기화
    };

    return(
        <div className="todoInsert">
            <form onSubmit={onSubmit}>
                <input 
                    type="text"
                    value = {value}
                    onChange={onChange}
                />

                <button type="submit">추가</button>
            </form>
        </div>
    );
}

export default TodoInsert;