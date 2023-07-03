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
import { validateInputs } from "../../utilities/validator";
import ProgressBar from "../ProgressBar/ProgressBar";
import FinalPage from "../Pages/FinalPage/FinalPage";

const Page = ({ defaultFormData, defaultOptions, defaultCheck }) => {
	const handleForm = e => {
		e.preventDefault();
	};

	const [currentPage, setCurrentPage] = useState(0);
	const [currentState, setCurrentState] = useState(defaultFormData);
	const [selectedOptions, setSelectedOptions] = useState(defaultOptions);
	const [checked, setChecked] = useState(defaultCheck);
	const [currentErrors, setCurrentErrors] = useState([]);
	const [progressBarValue, setProgressBarValue] = useState(0);

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
			errorsArr={currentErrors}
		/>,
		<SelectionForm
			fields={fields[currentPage]}
			selectedOptions={selectedOptions}
			onSelect={selectOption}
			errorsArr={currentErrors}
		/>,
		<ConsentForm
			fields={fields[currentPage]}
			currentState={checked}
			onCheck={handleCheckBox}
			consentText={fields[currentPage].text}
			errorsArr={currentErrors}></ConsentForm>,
	];

	const handlePageForwards = e => {
		e.preventDefault();

		if (currentPage === 0) {
			const formErrors = validateInputs(currentState, fields[currentPage]);
			console.log(formErrors);

			if (formErrors.length > 0) {
				setCurrentErrors(formErrors);
			} else {
				setCurrentPage(currentPage + 1);
				setProgressBarValue(progressBarValue + 100 / pages.length);
				setCurrentErrors([]);
			}
		}

		if (currentPage === 1) {
			const formErrors = validateInputs(selectedOptions, fields[currentPage]);
			console.log(formErrors);

			if (formErrors.length > 0) {
				setCurrentErrors(formErrors);
			} else {
				setCurrentPage(currentPage + 1);
				setProgressBarValue(progressBarValue + 100 / pages.length);
				setCurrentErrors([]);
			}
		}
	};

	const handleSend = e => {
		e.preventDefault();
		const formErrors = validateInputs(checked, fields[currentPage]);

		if (formErrors.length > 0) {
			setCurrentErrors(formErrors);
		} else {
			setProgressBarValue(0);
			setCurrentPage(0);
			setCurrentState(defaultFormData);
			setSelectedOptions(defaultOptions);
			setChecked(defaultCheck);
			setCurrentErrors([]);
		}
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
			<ProgressBar value={progressBarValue} maxValue={100} />
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
						<ButtonSend type='submit' onClick={handleSend}>
							Send
						</ButtonSend>
					)}
				</ButtonBox>
			</Form>
		</>
	);
};

export default Page;
