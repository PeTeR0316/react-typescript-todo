const ADD_TODO = 'todo/ADD_TODO' as const;
const DELETE_TODO = 'toso/DELETETODO' as const;

export const addTodo = (title: string) => ({
    type: ADD_TODO,
    payload: title,
});

export const deleteTodo  = (index: number) => ({
    type: DELETE_TODO,
    payload: index,
});


type TodoAction = 
    | ReturnType<typeof addTodo>
    | ReturnType<typeof deleteTodo>;

export type Todo = {
    index: number;
    title: string;
};

type TodoState = Todo[];

const initialState: TodoState = [
    {
        index: 0,
        title : "첫번째 리스트"
    },
    {
        index: 1,
        title : "두번째 리스트"
    },
];

export default function todos(state: TodoState = initialState, action: TodoAction) {
    switch(action.type) {
        case ADD_TODO :
            const nextIndex = Math.max(...state.map(todo => todo.index)) + 1;
            return state.concat({
                index: nextIndex,
                title: action.payload
            });
        case DELETE_TODO :
            return state.filter(todo => todo.index !== action.payload); // 삭제 요청한 index 번호를 걸러내는 작업
        default :
            return state;
    }
}

