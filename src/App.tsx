import React from 'react';
import './App.css';
import TodoList from './components/TodoList/TodoList';
import NewTodo from './components/NewTodo/NewTodo';
import TodosContextProvider from './store/todos-context';

function App() {

	return (
		<div className="App">
			<TodosContextProvider>
				<NewTodo />
				<TodoList />
			</TodosContextProvider>
		</div>
	);
}

export default App;
