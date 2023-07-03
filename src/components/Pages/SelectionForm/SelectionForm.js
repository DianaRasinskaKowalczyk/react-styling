import React from "react";
import { StyledSelectionForm } from "./SelectionForm.styled";
import Dropdown from "../../Dropdown/Dropdown ";
import Error from "../../Error/Error";

const SelectionForm = ({ fields, selectedOptions, onSelect, errorsArr }) => {
	const dropdowns = fields.map(field => {
		const fieldError = errorsArr.map(error => {
			if (error.name === field.name) {
				return `${field.label}`;
			}
			return null;
		});

		if (field.type === "select") {
			return (
				<React.Fragment key={field.name}>
					<Dropdown
						key={field.label}
						name={field.name}
						selectedOptions={selectedOptions[field.name]}
						options={field.options}
						onSelect={onSelect}
						label={field.label}></Dropdown>
					<Error>{fieldError}</Error>
				</React.Fragment>
			);
		}
	});

	return <StyledSelectionForm>{dropdowns}</StyledSelectionForm>;
};

export default SelectionForm;
