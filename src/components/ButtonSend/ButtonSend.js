import React from "react";
import { StyledButtonSend } from "./ButtonSend.styled";

const ButtonSend = props => {
	const { children, type } = props;

	return <StyledButtonSend type={type}>{children}</StyledButtonSend>;
};

export default ButtonSend;
