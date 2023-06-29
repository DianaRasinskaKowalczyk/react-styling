import React from "react";
import { StyledConsentText } from "./ConsentText.styled";

const ConsentText = props => {
	const { children } = props;

	return <StyledConsentText>{children}</StyledConsentText>;
};

export default ConsentText;
