import styled from "styled-components";

const StyledCheckboxLabel = styled.label`
	display: flex;
	flex-direction: column;
	row-gap: 20px;
	align-items: center;
	position: relative;
	cursor: pointer;
	font-size: 20px;
	input {
		position: absolute;
		opacity: 0;
		cursor: pointer;
		height: 0;
		width: 0;
	}

	input:checked ~ div {
		box-shadow: inset 3px 3px 5px #c5c5c5, inset -3px -3px 5px #ffffff;
		background-color: #e4ebf5;
	}
	input:checked ~ div::after {
		opacity: 1;
	}
`;

const StyledCheckMark = styled.div`
	position: relative;
	top: 0;
	left: 0;
	height: 1.3em;
	width: 1.3em;
	background-color: #5b0eeb;
	border-radius: 100%;
	/* background: #e8e8e8; */
	box-shadow: 3px 3px 5px #c5c5c5, -3px -3px 5px #ffffff;
	transition-duration: 0.5s;

	&::after {
		content: "";
		position: absolute;
		opacity: 0;
		left: 0.45em;
		top: 0.25em;
		width: 0.25em;
		height: 0.5em;
		border: solid #5b0eeb;
		border-width: 0 0.15em 0.15em 0;
		transform: rotate(45deg);
	}
`;
const StyledCheckWrapper = styled.div`
	display: flex;
	flex: column;
	align-items: center;

	/* margin-top: 40px; */
`;

export { StyledCheckMark, StyledCheckboxLabel, StyledCheckWrapper };
