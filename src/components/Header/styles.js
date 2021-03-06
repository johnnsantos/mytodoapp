import styled from 'styled-components'

export const StyledHeader = styled.header`
width: 100%;
padding: 3%;
background: rgb(94,145,254);
background: linear-gradient(0deg, rgba(94,145,254,1) 0%, rgba(56,104,206,1) 100%);
display: flex;
flex-flow: column nowrap;
align-items: center;
justify-content: space-around;
min-height: 25vh;
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

@media (min-width: 1024px) {
	padding: 0 10% 0;
	justify-content: space-evenly;
}

.header-title {
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: center;
	color: white;
	text-shadow: 2px 2px #5a5a5a;

	h1 {
		margin-right: 5vw;
		font-size: 2.25rem;
		
		@media (min-width: 1024px) {
		margin-right: 0.5rem;
		font-size: 2rem;
		}
	}

	svg {
		font-size: 1.8rem;
	}
}

form {
	width: 100%;
	display: flex;
	flex-flow: column nowrap;
	align-items: center;

	@media (min-width: 1024px) {
		width: 60%;
		}
}
`

export const StyledInput = styled.input`
padding: 3% 5%;
border: none;
outline: none;
width: 100%;
border-radius: 0.3rem;
font-size: 1rem;

@media (min-width: 1024px) {
	padding: 1% 3%;
	}
`

export const SaveTodoButton = styled.button`
padding: 5px 15px;
border: none;
outline: none;
color: white;
background-color: transparent;
border: 1px solid white;
border-radius: 0.3rem;
font-size: 1.15rem;
font-weight: bold;
cursor: pointer;
margin-top: 1rem;


&:hover{
background-color:#00b62d;	
}

&:active{
position:relative;
top:1px;
}
`
