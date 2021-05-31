import React, { useContext } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import classes from './TodoList.module.css';
import { TodosContext } from '../../store/todos-context';

const TodoList: React.FC = () => {

	const todosCtx = useContext(TodosContext);

	return <ul className={classes.todos}>
		{todosCtx.items.map(el =>
			<TodoItem
				key={el.id}
				item={el}
				onRemoveTodo={todosCtx.removeTodo.bind(null, el.id)}
			/>
		)}
	</ul>
}

export default TodoList;