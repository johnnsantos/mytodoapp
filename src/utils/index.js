const getTodosFromLocalStorage = () => {
	const retrievedTodos = localStorage.getItem("todos");
	if (retrievedTodos !== null) {
		return JSON.parse(retrievedTodos);
	}
	return [];
};

export const retrieveTodos = (setDataTodos) => {
	const data = getTodosFromLocalStorage();
	if (data !== []) {
		setDataTodos(data);
	}
};

export const persistTodos = (dataTodos) => {
	let todosFromLocalStorage = getTodosFromLocalStorage();

	let alreadySavedIDS = new Set(dataTodos.map((todo) => todo.id));

	let updatedTodos = [
		...dataTodos,
		...todosFromLocalStorage.filter((todo) => !alreadySavedIDS.has(todo.id)),
	];

	localStorage.setItem("todos", JSON.stringify(updatedTodos));
};

export const removeFromPersist = (id) => {
	let todosFromLocalStorage = getTodosFromLocalStorage();

	let updatedTodos = todosFromLocalStorage.filter((todo) => todo.id !== id);

	localStorage.setItem("todos", JSON.stringify(updatedTodos));
};

export const filterTodos = (setDataTodos, filterType) => {
	let todosFromLocalStorage = getTodosFromLocalStorage();
	let filteredTodos = [];

	switch (filterType) {
		case "all":
			filteredTodos = todosFromLocalStorage;
			setDataTodos(filteredTodos);
			break;

		case "todo":
			filteredTodos = todosFromLocalStorage.filter((todo) => !todo.done);
			setDataTodos(filteredTodos);
			break;

		case "done":
			filteredTodos = todosFromLocalStorage.filter((todo) => todo.done);
			setDataTodos(filteredTodos);
			break;

		default:
			break;
	}
};
