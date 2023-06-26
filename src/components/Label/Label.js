import React from "react";
import StyledLabel from "./Label.styled";

const Label = props => {
	const { children, htmlFor } = props;
	return <StyledLabel htmlFor={htmlFor}>{children}</StyledLabel>;
};

export default Label;
