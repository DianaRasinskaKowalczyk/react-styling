import React from "react";
import { StyledButton } from "./Button.styled";

const Button = props => {
	const { children, type, onClick } = props;

	return (
		<StyledButton type={type} onClick={onClick}>
			{children}
		</StyledButton>
	);
};

export default Button;
