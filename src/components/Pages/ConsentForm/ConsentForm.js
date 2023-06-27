import React from "react";
import { StyledConsentForm } from "./ConsentForm.styled";

const ConsentForm = props => {
	const { children } = props;
	return <StyledConsentForm>{children}</StyledConsentForm>;
};

export default ConsentForm;
