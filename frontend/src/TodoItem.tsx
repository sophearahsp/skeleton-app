import React from 'react';

const TodoItem = (props: { taskName: string }) => {
    return (
        <div>
            <p>{props.taskName}</p>
        </div>
    );
};

export { TodoItem };
