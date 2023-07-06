import React from "react";
import { StyledFinalPage } from "./FinalPage.styled";
import FinalList from "../../FinalList/FinalList";

const FinalPage = props => {
	const { summaryList } = props;

	const finalData = [
		{ label: "First name:", value: summaryList.firstName },
		{ label: "Last name:", value: summaryList.lastName },
		{ label: "Phone name:", value: summaryList.phone },
		{ label: "Email name:", value: summaryList.email },
		{ label: "Date of birth:", value: summaryList.birthDate },
	];

	return (
		<StyledFinalPage>
			<FinalList data={finalData}></FinalList>
		</StyledFinalPage>
	);
};

export default FinalPage;
