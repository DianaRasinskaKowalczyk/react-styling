import React from "react";
import { StyledError } from "./Error.styled";

const Error = props => {
	const { children } = props;

	return <StyledError>{children}</StyledError>;
};
export default Error;
