import React from "react";

import StyledForm from "./Form.styled";

const Form = props => {
	const { children, onSubmit } = props;

	return <StyledForm onSubmit={onSubmit}>{children}</StyledForm>;
};

export default Form;
