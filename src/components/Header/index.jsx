import { StyledHeader, StyledInput, SaveTodoButton } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons";

const Header = ({ todo, change, submit }) => {
	return (
		<StyledHeader>
			<div className="header-title">
				<h1>MyTodoList</h1>
				<FontAwesomeIcon icon={faClipboardCheck} />
			</div>
			<form onSubmit={submit}>
				<StyledInput
					type="text"
					placeholder="Add new todo"
					value={todo}
					onChange={change}
				/>
				<SaveTodoButton type="submit">Save</SaveTodoButton>
			</form>
		</StyledHeader>
	);
};

export default Header;
