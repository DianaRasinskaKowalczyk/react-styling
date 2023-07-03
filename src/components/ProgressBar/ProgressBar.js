import React from "react";
import { StyledProgressBar, StyledProgressBarBox } from "./ProgressBar.styled";

const ProgressBar = ({ value, maxValue }) => {
	const percentComplete = (value / maxValue) * 100;

	return (
		<StyledProgressBarBox>
			<StyledProgressBar style={{ width: `${percentComplete}%` }} />
		</StyledProgressBarBox>
	);
};

export default ProgressBar;
