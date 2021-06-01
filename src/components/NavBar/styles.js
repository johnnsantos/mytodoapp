import styled from 'styled-components'

export const MenuBar = styled.nav`
width: 100%;
background-color: lightblue;
box-shadow: 1px 1px 10px gray;
display: flex;
flex-flow: row nowrap;
align-items: center;
justify-content: space-between;

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
`