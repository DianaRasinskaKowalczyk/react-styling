import React from "react";
import { StyledDropdownItem } from "./DropdownItem.styled";

const DropdownItem = props => {
	const { children, onClick } = props;

	return <StyledDropdownItem onClick={onClick}>{children}</StyledDropdownItem>;
};

export default DropdownItem;
