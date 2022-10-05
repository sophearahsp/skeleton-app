import { TodoProvider } from "./TodoContext";
import TodoApp from "./TodoApp";

export default function App() {
    return (
        <TodoProvider>
            <TodoApp />
        </TodoProvider>
    );
}

