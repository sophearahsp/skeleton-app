import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import { TodoProvider } from "./TodoContext";
import TodoApp from "./TodoApp";

function Page(){
    let params = useParams();
    return (
        <>
            {params.id}
        </>
    )
}

export default function App() {
    return (
        <TodoProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<TodoApp />}/>
                    <Route path="/page/:id" element={<Page />}/>
                </Routes>
            </BrowserRouter>
        </TodoProvider>
    );
}

