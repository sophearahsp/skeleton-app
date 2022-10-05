import React, {useState} from 'react';
import { TodoItem } from './TodoItem';
import { Button } from '@mui/material';

// Create a functional component
export default function App() {
    const [todoCount, setTodoCount] = useState(0);

    const onClickButton = () => {
        setTodoCount(todoCount + 1);
        console.log("Button clicked");
    };

	return (
		<div>
            <Button onClick={onClickButton} variant="contained">
                basic mui button
            </Button>
            {todoCount}
		</div>
	);
}