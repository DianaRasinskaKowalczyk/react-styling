import styled from "styled-components";

const StyledHeader = styled.header`
	margin-top: 2rem;
	margin-bottom: 2rem;
	display: flex;
	justify-content: center;

	h1 {
		font-size: 3rem;
		color: #5b0eeb;
		font-family: "Poppins", sans-serif;
		font-weight: lighter;
		box-shadow: 0.3rem 0.3rem 0.6rem #5b0eeb, -0.2rem -0.2rem 0.5rem #ffffff;
		border: none;
		border-radius: 1rem;
		padding: 5px;
	}
`;

export { StyledHeader };
