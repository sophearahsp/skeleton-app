import React from 'react';
import { useContext } from 'react';
import { TodoContext, TodoContextType } from "./TodoContext";

export default function TodoApp() {
    const { todo } = useContext(TodoContext) as TodoContextType;
    // Rest of your code using todos goes here

    return (
        <div>
            {todo?.taskName}
        </div>
    )
}
