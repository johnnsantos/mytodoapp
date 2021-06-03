import styled from 'styled-components'

export const MenuBar = styled.nav`
width: 100%;
box-shadow: 1px 1px 10px gray;
display: flex;
flex-flow: row nowrap;
align-items: center;
justify-content: space-between;

@media (min-width: 1024px) {
	width: 60%;
	margin: 0 auto;
}
`

export const MenuButton = styled.button`
width: 100%;
padding: 15px 0px;
border: none;
outline: none;
font-size: 0.95rem;
font-weight: bold;
cursor: pointer;
color: #2f2f2f;

svg {
	font-size: 0.95rem;
	margin-right: 5px;
	color: #0075d4;
}

&:hover {
	background-color: #cacaca;
}

&:active {
	background-color: #cacaca;
}

&:nth-child(2) {
	border-left: 1px solid #bbbbbb;
	border-right: 1px solid #bbbbbb;
}

@media (min-width: 1024px) {
	padding: 10px 0px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	svg {
		font-size: 1.5rem;
		margin-bottom: 10px;
		margin-right: 0;
	}
	}
`