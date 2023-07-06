import styled from "styled-components";

const StyledButtonMovePage = styled.button`
	width: 10rem;
	height: 4rem;
	border-radius: 1rem;
	box-shadow: 0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem #ffffff;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: 0.3s ease;
	border: none;
	color: #9baacf;
	&:hover {
		color: #6d5dfc;
	}
	&:active {
		box-shadow: inset 0.2rem 0.2rem 0.5rem #5b0eeb,
			inset -0.2rem -0.2rem 0.5rem #ffffff;
	}
	&:disabled {
		box-shadow: inset 0.2rem 0.2rem 0.5rem #c8d0e7,
			inset -0.2rem -0.2rem 0.5rem #ffffff;
		cursor: not-allowed;
		color: #9baacf;
	}
`;

export { StyledButtonMovePage };
