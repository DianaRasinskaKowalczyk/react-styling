import React from "react";
import { StyledError } from "./Error.styled";

const Error = props => {
	const { errors } = props;

	return <StyledError>{errors.map(e => e.message)}</StyledError>;
	

};
export default Error;
