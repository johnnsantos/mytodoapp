import TodoCard from "../TodoCard";

const TodosContainer = ({ markDoneTodo, deleteTodo, dataTodos }) => {
	return (
		<>
			{dataTodos.map((todo) => (
				<TodoCard
					id={todo.id}
					key={todo.id}
					name={todo.title}
					checked={todo.done}
					markDoneTodo={markDoneTodo}
					deleteTodo={deleteTodo}
				/>
			))}
		</>
	);
};

export default TodosContainer;
