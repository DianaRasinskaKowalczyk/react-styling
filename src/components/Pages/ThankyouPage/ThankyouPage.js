import React from "react";
import { StyledThankyouPage, StyledThankyouInfo } from "./ThankyouPage.styled";

const ThankyouPage = props => {
	const { children } = props;

	return (
		<StyledThankyouPage>
			<StyledThankyouInfo>{children}</StyledThankyouInfo>
		</StyledThankyouPage>
	);
};

export default ThankyouPage;
