import React from "react";
import { StyledConsentForm } from "./ConsentForm.styled";
import Checkbox from "../../Checkbox/Checkbox";
import Error from "../../Error/Error";

const ConsentForm = props => {
	const { fields, currentState, onCheck, consentText, errorsArr } = props;

	const checkboxList = fields.map(field => {
		const fieldError = errorsArr.map(error => {
			if (error.name === field.name) {
				return `${field.errMessage}`;
			}
			return null;
		});

		if (field.type === "checkbox") {
			return (
				<React.Fragment key={field.name}>
					<Checkbox
						key={field.name}
						inputValue={currentState[field.name]}
						onCheck={onCheck}
						name={field.name}
						consentText={field.label}
					/>
					<Error>{fieldError}</Error>
				</React.Fragment>
			);
		}
	});

	return <StyledConsentForm>{checkboxList}</StyledConsentForm>;
};

export default ConsentForm;

