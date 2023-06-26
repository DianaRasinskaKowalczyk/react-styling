import React from "react";
import StyledTextInput from "./TextInput.styled";

const TextInput = props => {
	const { type, name, value, onChange, placeholder } = props;

	return (
		<StyledTextInput
			type={type}
			name={name}
			value={value}
			onChange={onChange}
			placeholder={placeholder}
		/>
	);
};

export default TextInput;
