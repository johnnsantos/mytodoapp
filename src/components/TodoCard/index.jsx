import { TodoBody } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import ConfirmationModal from "../ConfirmationModal";
import { useState, useEffect } from "react";

const TodoCard = ({ id, name, checked, toggleDoneTodo, deleteTodo }) => {
    const [modalOpen, toggleModal] = useState(false);
    const [confirm, setConfirm] = useState(false);

    useEffect(() => {
        deleteTodo(id, confirm);
    }, [confirm, deleteTodo, id]);

    return (
        <>
            <ConfirmationModal
                open={modalOpen}
                toggle={() => toggleModal(!modalOpen)}
                confirm={() => setConfirm(true)}
            />
            <TodoBody done={checked}>
                <input
                    readOnly
                    type="checkbox"
                    className="check-todo"
                    checked={checked}
                    onClick={() => toggleDoneTodo(id)}
                />
                <span className="todo-title">{name}</span>
                <button className="delete-todo" onClick={() => toggleModal(true)}>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </TodoBody>
        </>
    );
};

export default TodoCard;
