import React from 'react';
import TodoList from './components/TodoList'
import TodoInsert from './components/TodoInsert'

function App() {
  return (
    <div className="App">
      <TodoInsert />
      <TodoList />
    </div>
  );
}

export default App;
