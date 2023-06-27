import styled from "styled-components";

const StyledButtonSend = styled.button`
	width: 10rem;
	height: 4rem;
	border-radius: 1rem;
	box-shadow: 0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem #ffffff;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: 0.3s ease;
	background: #6d5dfc;
	box-shadow: inset 0.2rem 0.2rem 1rem #8abdff,
		inset -0.2rem -0.2rem 1rem #5b0eeb, 0.3rem 0.3rem 0.6rem #c8d0e7,
		-0.2rem -0.2rem 0.5rem #ffffff;
	color: #e4ebf5;
	border: none;

	&:hover {
		color: #ffffff;
	}
	&:active {
		box-shadow: inset 0.2rem 0.2rem 1rem #5b0eeb,
			inset -0.2rem -0.2rem 1rem #5b0eeb;
	}
`;

export { StyledButtonSend };
