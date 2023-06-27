import React from "react";
import { StyledLabel } from "./Label.styled";

const Label = props => {
	const { label, children } = props;

	return <StyledLabel htmlFor={label}>{children}</StyledLabel>;
};

export default Label;