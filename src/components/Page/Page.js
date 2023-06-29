import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import Form from "../Form/Form";
import ButtonBox from "../ButtonBox/ButtonBox";
import ButtonSend from "../ButtonSend/ButtonSend";
import ButtonMovePage from "../ButtonMovePage/ButtonMovePage";
import ConsentForm from "../Pages/ConsentForm/ConsentForm";
import DataForm from "../Pages/DataForm/DataForm";
import SelectionForm from "../Pages/SelectionForm/SelectionForm";
import fields from "../../utilities/fields";

const Page = ({ defaultFormData, defaultOptions, defaultCheck }) => {
	const handleForm = e => {
		e.preventDefault();
	};

	const [currentPage, setCurrentPage] = useState(2);
	const [currentState, setCurrentState] = useState(defaultFormData);
	const [selectedOptions, setSelectedOptions] = useState(defaultOptions);
	const [checked, setChecked] = useState(defaultCheck);

	useEffect(() => {
		setCurrentState(defaultFormData);
	}, [defaultFormData]);

	useEffect(() => {
		setSelectedOptions(defaultOptions);
	}, [defaultOptions]);

	const handleInputChange = (name, value) => {
		setCurrentState({ ...currentState, [name]: value });
	};

	const selectOption = (name, option) => {
		setSelectedOptions({ ...selectedOptions, [name]: option });
	};

	const handleCheckBox = (name, inputValue) => {
		setChecked({ ...checked, [name]: inputValue });
	};

	const pages = [
		<DataForm
			fields={fields[currentPage]}
			currentState={currentState}
			onChange={handleInputChange}
		/>,
		<SelectionForm
			fields={fields[currentPage]}
			selectedOptions={selectedOptions}
			onSelect={selectOption}
		/>,
		<ConsentForm
			fields={fields[currentPage]}
			currentState={checked}
			onCheck={handleCheckBox}
			consentText={fields[currentPage].text}></ConsentForm>,
	];

	const handlePageForwards = e => {
		e.preventDefault();
		setCurrentPage(currentPage + 1);
	};

	const handlePageBackwards = e => {
		e.preventDefault();
		setCurrentPage(currentPage - 1);
	};

	return (
		<>
			<Header>
				<h1>REGISTRATION FORM</h1>
			</Header>
			<Form onSubmit={handleForm}>
				{pages[currentPage]}

				<ButtonBox>
					<ButtonMovePage
						type='button'
						disabled={currentPage === 0 ? true : false}
						onClick={handlePageBackwards}>
						go back
					</ButtonMovePage>
					{currentPage !== pages.length - 1 ? (
						<ButtonMovePage type='button' onClick={handlePageForwards}>
							go forward
						</ButtonMovePage>
					) : (
						<ButtonSend type='submit'>Send</ButtonSend>
					)}
				</ButtonBox>
			</Form>
		</>
	);
};

export default Page;
