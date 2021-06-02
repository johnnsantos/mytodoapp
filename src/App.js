import Header from "./components/Header";
import NavBar from "./components/NavBar";
import TodosContainer from "./components/TodosContainer";
import { GlobalStyle } from "./GlobalStyle";
import { useState, useEffect } from "react";
import { persistTodos, retrieveTodos, removeFromPersist } from './utils'

const App = () => {
    const [todo, setTodo] = useState("");
    const [dataTodos, setDataTodos] = useState([]);

    useEffect(() => {
        retrieveTodos(setDataTodos)
    }, [])

    useEffect(() => {
        persistTodos(dataTodos)
    }, [dataTodos])

    const toggleDoneTodo = (id) => {
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
            removeFromPersist(id)
        }
    };

    const saveNewTodo = (e) => {
        e.preventDefault();
        if (todo.trim() !== '') {
            setDataTodos([{ id: Date.now(), title: todo, done: false }, ...dataTodos]);
            setTodo("");
        }
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
                toggleDoneTodo={toggleDoneTodo}
                deleteTodo={deleteTodo}
                dataTodos={dataTodos}
            />
        </>
    );
};

export default App;
