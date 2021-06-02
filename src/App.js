import Header from "./components/Header";
import NavBar from "./components/NavBar";
import TodosContainer from "./components/TodosContainer";
import { GlobalStyle } from "./GlobalStyle";
import { useState } from "react";

const App = () => {
    const [todo, setTodo] = useState("");
    const [dataTodos, setDataTodos] = useState([]);

    const markDoneTodo = (id) => {
        const foundTodo = dataTodos.findIndex((todo) => todo.id === id);
        const newState = [...dataTodos];
        newState[foundTodo] = {
            id: dataTodos[foundTodo].id,
            title: dataTodos[foundTodo].title,
            done: !dataTodos[foundTodo].done,
        };
        setDataTodos(newState);
    };

    const deleteTodo = (id, confirmDelete) => {
        if (confirmDelete) {
            const updatedTodos = dataTodos.filter((item) => item.id !== id);
            setDataTodos(updatedTodos);
        }
    };

    const saveNewTodo = (e) => {
        e.preventDefault();
        setDataTodos([{ id: Date.now(), title: todo, done: false }, ...dataTodos]);
        setTodo("");
    };

    return (
        <>
            <GlobalStyle />
            <Header
                todo={todo}
                change={(e) => setTodo(e.target.value)}
                submit={(e) => saveNewTodo(e)}
            />
            <NavBar />
            <TodosContainer
                markDoneTodo={markDoneTodo}
                deleteTodo={deleteTodo}
                dataTodos={dataTodos}
            />
        </>
    );
};

export default App;
