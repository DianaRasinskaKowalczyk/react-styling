import React from "react";
import { StyledFinalList, StyledFinalText } from "./FinalList.styled";

const FinalList = props => {
	const { data } = props;
	console.log(data);

	const list = data.map(item => {
		return (
			<StyledFinalText key={item.label}>
				{item.label} {item.value}
			</StyledFinalText>
		);
	});

	return <StyledFinalList>{list}</StyledFinalList>;
};

export default FinalList;
