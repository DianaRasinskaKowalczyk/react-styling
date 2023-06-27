import React from "react";
import { StyledButtonBox } from "./ButtonBox.styled";

const ButtonBox = props => {
	const { children } = props;

	return <StyledButtonBox>{children}</StyledButtonBox>;
};

export default ButtonBox;
