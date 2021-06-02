import styled from 'styled-components'

export const TodoBody = styled.div`
background-color: ${props => props.done ? "#acd9ee " : "#e7e7e7"};
padding: 5% 4%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
margin: 25px auto 25px;
border-radius: 0.3rem;
width: 90%;
animation-name: opacity;
animation-duration: 1s;

@keyframes opacity {
	0% {opacity: 0;}
	50% {opacity: 0.5;}
	50% {opacity: 1;}
}

.check-todo {
	outline: none;
	border: none;
	transform: scale(1.5)
}

.todo-title {
	color: ${props => props.done ? "#3b3b3b" : "#141414"};
	font-weight: ${props => props.done ? "normal" : "bold"};
	text-decoration: ${props => props.done ? "line-through" : "none"};
	font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
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