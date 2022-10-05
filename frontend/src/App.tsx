import React from 'react';
import { TodoItem } from './TodoItem';

// Create a functional component
export default function App() {
	return (
		<div>
			<TodoItem taskName="COMP 251 A1"/>
			<TodoItem taskName="COMP 303 A1"/>
			<TodoItem taskName="finish making bootcamp materials"/>
		</div>
	);
}
