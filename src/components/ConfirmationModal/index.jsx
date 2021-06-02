import { ModalBody, PopUp, DeleteButton, CancelButton } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

const ConfirmationModal = ({ open, toggle, confirm }) => {
	return (
		<ModalBody open={open}>
			<PopUp>
				<FontAwesomeIcon icon={faWindowClose} />
				<span>Are you sure to delete the selected task?</span>
				<div className="modal-controls">
					<CancelButton onClick={() => toggle()}>Cancel</CancelButton>
					<DeleteButton onClick={() => confirm()}>Yes</DeleteButton>
				</div>
			</PopUp>
		</ModalBody>
	);
};

export default ConfirmationModal;
