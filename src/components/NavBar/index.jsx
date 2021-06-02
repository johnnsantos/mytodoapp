import { MenuBar, MenuButton } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faClipboard,
  faCalendarPlus,
} from "@fortawesome/free-solid-svg-icons";
import { filterTodos } from '../../utils'

const NavBar = ({ setDataTodos }) => {
  return (
    <MenuBar>
      <MenuButton onClick={() => filterTodos(setDataTodos, 'all')}>
        <FontAwesomeIcon icon={faClipboard} />
                All
              </MenuButton>
      <MenuButton onClick={() => filterTodos(setDataTodos, 'todo')}>
        <FontAwesomeIcon icon={faCalendarPlus} />
                To Do
              </MenuButton>
      <MenuButton onClick={() => filterTodos(setDataTodos, 'done')}>
        <FontAwesomeIcon icon={faCheck} />
                Done
              </MenuButton>
    </MenuBar>
  );
};

export default NavBar;
