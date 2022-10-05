import React, {useState, useEffect} from 'react';
import { TodoItem } from './TodoItem';
import { Button } from '@mui/material';
import axios from 'axios';

interface TodoI {
    // ? makes the property optional
    id?: number;
    taskName: string;
    completed: boolean;
};

async function getTodo() {
    const response = await axios.get("http://localhost:3001/hardcoded-todo");
    return response.data;
}

// Create a functional component
export default function App() {
    const [todo, setTodo] = useState<TodoI>({} as TodoI);

    useEffect(() => {
        const fetchTodo = async () => {
            const new_todo = await getTodo();
			console.log(new_todo)
            setTodo(new_todo)
        }

        fetchTodo();
    }, []);    

	return (
		<div>
            {todo?.taskName}
		</div>
	);
}