import React, {useState, useEffect, createContext} from 'react';
import axios from 'axios';

async function getTodo() {
    const response = await axios.get("http://localhost:3001/hardcoded-todo");
    return response.data;
}

interface TodoI {
    id?: number;
    taskName: string;
    completed: boolean;
};

export type TodoContextType = {
    todo: TodoI,
    setTodo: React.Dispatch<React.SetStateAction<TodoI>>
}

export const TodoContext = createContext<TodoContextType | null>(null)

export const TodoProvider = (props: {children: React.ReactNode}) => {
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
        <TodoContext.Provider value={{todo, setTodo}}>
            {props.children}
        </TodoContext.Provider>
    )
}
    