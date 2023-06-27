import styled from "styled-components";

const StyledDropdownContainer = styled.div`
	border-radius: 1rem;
	width: 50%;
	box-shadow: 0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem #ffffff;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const StyledDropdownButton = styled.button`
	border-radius: 1rem;
	font-size: 1rem;
	background-color: inherit;
	color: #6d5dfc;
	padding-top: 10px;
	padding-bottom: 10px;
	margin: 5px;
	width: 40%;
	display: flex;
	flex-direction: column;
	align-items: center;
	border: none;
	cursor: pointer;
	transition: 1s ease;
	&:hover {
		font-weight: bold;
	}
	&:focus {
		font-weight: bold;
	}
`;

const StyledOptionsList = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: center;
	list-style: none;
	row-gap: 5px;
`;

export { StyledDropdownContainer, StyledDropdownButton, StyledOptionsList };
