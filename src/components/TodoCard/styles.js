import styled from 'styled-components'

let r = Math.floor(Math.random() * 256);
let g = Math.floor(Math.random() * 256);
let b = Math.floor(Math.random() * 256);

export const TodoBody = styled.div`
background-color: #cacaca;
border: 4px solid rgba(${r}, ${g}, ${b}, 0.5);
padding: 5% 4%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
margin: 25px auto 25px;
border-radius: 0.3rem;
width: 90%;

.check-todo {
	outline: none;
	border: none;
	transform: scale(1.5)
}

.todo-title {
	font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

.delete-todo {
	background-color: transparent;
	border: none;
	outline: none;
	color: #a70000;
	font-size: 1.15rem;
	cursor: pointer;

&:hover {
	color: #d32020;
}

}
`