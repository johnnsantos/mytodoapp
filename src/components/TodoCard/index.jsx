import { TodoBody } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const TodoCard = () => {
	return (
		<TodoBody>
			<input type="checkbox" className='check-todo' />
			<span className='todo-title'>Nome da tarefa</span>
			<button className='delete-todo'><FontAwesomeIcon icon={faTrash} /></button>
		</TodoBody>
	)
}

export default TodoCard