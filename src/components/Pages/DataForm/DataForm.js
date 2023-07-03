import React from "react";
import { StyledDataForm } from "./DataForm.styled";
import Label from "../../Label/Label";
import TextInput from "../../TextInput/TextInput";
import Error from "../../Error/Error";

const DataForm = props => {
	const { fields, currentState, onChange, errorsArr } = props;

	const formFields = fields.map(field => {
		const fieldError = errorsArr.map(error => {
			if (error.name === field.name) {
				return `${field.label} ${error.message}`;
			}
			return null;
		});

		return (
			<div key={field.name}>
				<Label label={field.name}>{field.label}</Label>
				<TextInput
					name={field.name}
					type={field.type}
					value={currentState[field.name]}
					onChange={onChange}
					placeholder={field.placeholder}
				/>
				<Error>{fieldError}</Error>
			</div>
		);
	});

	return <StyledDataForm>{formFields}</StyledDataForm>;
};

export default DataForm;
