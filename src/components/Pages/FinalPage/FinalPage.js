import React from "react";
import { StyledFinalPage } from "./FinalPage.styled";

const FinalPage = props => {
	const { children } = props;

	return <StyledFinalPage>{children}</StyledFinalPage>;
};

export default FinalPage;
