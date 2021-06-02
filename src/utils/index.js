const getTodosFromLocalStorage = () => {
	const data = localStorage.getItem("todos") !== null
		? JSON.parse(localStorage.getItem("todos"))
		: [];
	return data;
}

export const persistTodos = (dataTodos) => {
	if (dataTodos !== []) {
		const updatedTodos = [...getTodosFromLocalStorage(), dataTodos];
		localStorage.removeItem("todos");
		localStorage.setItem("todos", JSON.stringify(updatedTodos));
	}
}

export const retrieveTodos = (setDataTodos) => {
	const data = getTodosFromLocalStorage();
	if (data !== []) {
		setDataTodos(data)
	}
}