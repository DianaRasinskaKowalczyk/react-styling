import React from "react";
import { StyledSelectionForm } from "./SelectionForm.styled";
import Dropdown from "../../Dropdown/Dropdown ";

const SelectionForm = ({ fields, selectedOptions, onSelect }) => {
	const dropdowns = fields.map(field => {
		if (field.type === "select") {
			return (
				<Dropdown
					key={field.label}
					name={field.name}
					selectedOptions={selectedOptions[field.name]}
					options={field.options}
					onSelect={onSelect}
					label={field.label}></Dropdown>
			);
		}
	});

	return <StyledSelectionForm>{dropdowns}</StyledSelectionForm>;
};

export default SelectionForm;
