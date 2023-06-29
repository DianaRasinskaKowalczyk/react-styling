import React from "react";
import { StyledConsentForm } from "./ConsentForm.styled";
import Checkbox from "../../Checkbox/Checkbox";

const ConsentForm = props => {
	const { fields, currentState, onCheck, consentText } = props;

	const checkboxList = fields.map(field => {
		if (field.type === "checkbox") {
			return (
				<Checkbox
					key={field.name}
					inputValue={currentState[field.name]}
					onCheck={onCheck}
					name={field.name}
					consentText={field.label}
				/>
			);
		}
	});

	return <StyledConsentForm>{checkboxList}</StyledConsentForm>;
};

export default ConsentForm;

