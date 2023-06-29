import React from "react";
import { StyledDataForm } from "./DataForm.styled";
import Label from "../../Label/Label";
import TextInput from "../../TextInput/TextInput";

const DataForm = props => {
	const { fields, currentState, onChange } = props;

	const formFields = fields.map(field => {
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
			</div>
		);
	});

	return <StyledDataForm>{formFields}</StyledDataForm>;
};

export default DataForm;
