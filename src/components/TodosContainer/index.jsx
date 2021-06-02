import TodoCard from "../TodoCard";

const TodosContainer = ({ toggleDoneTodo, deleteTodo, dataTodos }) => {
	return (
		<>
			{dataTodos.map((todo) => (
				<TodoCard
					id={todo.id}
					key={todo.id}
					name={todo.title}
					checked={todo.done}
					toggleDoneTodo={toggleDoneTodo}
					deleteTodo={deleteTodo}
				/>
			))}
		</>
	);
};

export default TodosContainer;
