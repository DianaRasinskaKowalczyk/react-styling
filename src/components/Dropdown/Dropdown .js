import React, { useState } from "react";
import {
	StyledDropdownButton,
	StyledDropdownContainer,
	StyledOptionsList,
} from "./Dropdown.styled";
import DropdownItem from "../DropdownItem/DropdownItem";

const Dropdown = ({ label, selectedOptions, options, onSelect, name }) => {
	const [isOpen, setIsOpen] = useState(false);
	

	const handleToggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const selectOption = option => {
		onSelect(name, option);
		setIsOpen(false);
	};

	console.log(options);

	const optionsList = options.map(option => {
		return (
			<DropdownItem key={option} onClick={() => selectOption(option)}>
				{option}
			</DropdownItem>
		);
	});

	return (
		<StyledDropdownContainer>
			<StyledDropdownButton type='button' onClick={handleToggleDropdown}>
				{selectedOptions ? selectedOptions : label}
			</StyledDropdownButton>
			{isOpen && <StyledOptionsList>{optionsList}</StyledOptionsList>}
		</StyledDropdownContainer>
	);
};

export default Dropdown;
