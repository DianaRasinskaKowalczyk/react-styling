import React from "react";
import {
	StyledCheckMark,
	StyledCheckboxLabel,
	StyledCheckWrapper,
} from "./Checkbox.styled";
import { StyledConsentText } from "../ConsentText/ConsentText.styled";

const Checkbox = props => {
	const { inputValue, onCheck, name, consentText } = props;

	const handleCheckBox = () => {
		onCheck(name, !inputValue);
		console.log(consentText);
	};

	return (
		<StyledCheckWrapper>
			<StyledCheckboxLabel>
				<input type='checkbox' checked={inputValue} onChange={handleCheckBox} />
				<StyledCheckMark />
				<StyledConsentText>{consentText}</StyledConsentText>
			</StyledCheckboxLabel>
		</StyledCheckWrapper>
	);
};

export default Checkbox;
