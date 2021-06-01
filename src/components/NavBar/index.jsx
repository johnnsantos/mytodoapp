import { MenuBar, MenuButton } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faClipboard, faCalendarPlus } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
	return (
		<MenuBar>
			<MenuButton>
				<FontAwesomeIcon icon={faClipboard} />All
			</MenuButton>
			<MenuButton>
				<FontAwesomeIcon icon={faCalendarPlus} />To Do
			</MenuButton>
			<MenuButton>
				<FontAwesomeIcon icon={faCheck} />Done
			</MenuButton>
		</MenuBar>
	)
}

export default NavBar
