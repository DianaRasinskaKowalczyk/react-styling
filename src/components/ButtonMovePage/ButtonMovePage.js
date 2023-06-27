import React from "react";
import { StyledButtonMovePage } from "./ButtonMovePage.styled";

const ButtonMovePage = props => {
	const { children, type, disabled, onClick } = props;

	return (
		<StyledButtonMovePage type={type} disabled={disabled} onClick={onClick}>
			{children}
		</StyledButtonMovePage>
	);
};

export default ButtonMovePage;
