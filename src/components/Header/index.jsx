import { StyledHeader, StyledInput, SaveTodoButton } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
	return (
		<StyledHeader >
			<div className="header-title">
				<h1>MyTodoList</h1>
				<FontAwesomeIcon icon={faClipboardCheck} />
			</div>
			<StyledInput type='text' placeholder='Add new todo' />
			<SaveTodoButton>
				Save
				</SaveTodoButton>
		</StyledHeader>
	)
}

export default Header;