import styled from 'styled-components'

export const ModalBody = styled.div`
display: none;
position: absolute;
width: 100%;
height: 100%;
background-color: #000000d1;
top: 0;
left: 0;
z-index: 1;
opacity: 1;
transition: opacity ease-in-out 0.5s;
`

export const PopUp = styled.div`
position: relative;
display: flex;
flex-flow: column nowrap;
align-items: center;
justify-content: center;
width: 90%;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
color: #1b1b1b;
background-color: #fdfdfd;
border-radius: 0.3rem;
padding: 5% 15%;
text-align: center;
font-size: 1.25rem;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

svg {
	font-size: 2rem;
	color: #cf0000;
	margin-bottom: 0.5rem;
}


.modal-controls {
	width: 75%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 0.75rem 0 0.75rem;
}
`

export const DeleteButton = styled.button`
border: none;
outline: none;
cursor: pointer;
padding: 5px 15px;
font-size: 0.95rem;
border-radius: 0.3rem;
background-color: #cf0000;;
color: white;
font-weight: bold;
`

export const CancelButton = styled.button`
border: none;
outline: none;
cursor: pointer;
padding: 5px 15px;
font-size: 0.95rem;
border-radius: 0.3rem;
font-weight: bold;
`