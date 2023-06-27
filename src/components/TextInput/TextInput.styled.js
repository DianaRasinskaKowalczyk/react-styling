import styled from "styled-components";

const StyledTextInput = styled.input`
	width: 15rem;
	height: 3rem;
	border: none;
	border-radius: 3rem;
	font-size: 1rem;
	padding-left: 1rem;
	margin-top: 1.2rem;
	box-shadow: inset 0.2rem 0.2rem 0.5rem #c8d0e7,
		inset -0.2rem -0.2rem 0.5rem #ffffff;
	background: inherit;
	font-family: inherit;
	color: #9baacf;
	&::placeholder {
		color: #bec8e4;
	}
	&:focus {
		outline: none;
		box-shadow: 0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem #ffffff;
	}
`;

export default StyledTextInput;
