import React from "react";
import StyledInputField from "./InputField.styled";

const InputField = props => {
	const { children } = props;

	return <StyledInputField>{children}</StyledInputField>;
};
export default InputField;
