import React from "react";
import { StyledButtonSend } from "./ButtonSend.styled";

const ButtonSend = props => {
	const { children, type, onClick } = props;

	return (
		<StyledButtonSend type={type} onClick={onClick}>
			{children}
		</StyledButtonSend>
	);
};

export default ButtonSend;
