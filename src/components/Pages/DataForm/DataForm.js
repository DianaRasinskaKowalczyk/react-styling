import React, { useReducer } from "react";
import Label from "../../Label/Label";
import TextInput from "../../TextInput/TextInput";
import InputField from "../../InputField/InputField";

const DataForm = props => {
	const { fields, inputState, onChange } = props;

	const formFields = fields.map(field => {
		return (
			<InputField>
				<Label htmlFor={field.name} key={field.name}>
					{field.label}
				</Label>
				<TextInput
					type={field.type}
					name={field.name}
					value={inputState[field.name]}
					onChange={onChange}
					placeholder={field.placeholder}
				/>
			</InputField>
		);
	});

	return { formFields };
};

export default DataForm;
