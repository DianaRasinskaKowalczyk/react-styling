import React, { useState, useEffect, useReducer } from "react";
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

const Page = ({ defaultData }) => {
	const [currentPage, setCurrentPage] = useState(2);
	const [currentState, setCurrentState] = useState(defaultData);
	const [currentErrors, setCurrentErrors] = useState([]);
	const [progressBarValue, setProgressBarValue] = useState(0);

	const handleInputChange = (name, value) => {
		setCurrentState({ ...currentState, [name]: value });
	};

	const selectOption = (name, option) => {
		setCurrentState({ ...currentState, [name]: option });
	};

	const handleCheckBox = (name, inputValue) => {
		setCurrentState({ ...currentState, [name]: inputValue });
	};

	const handleForm = e => {
		e.preventDefault();
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
			selectedOptions={currentState}
			onSelect={selectOption}
			errorsArr={currentErrors}
		/>,
		<ConsentForm
			fields={fields[currentPage]}
			currentState={currentState}
			onCheck={handleCheckBox}
			errorsArr={currentErrors}></ConsentForm>,
		<FinalPage summaryList={currentState}></FinalPage>,
	];

	const handlePageForwards = e => {
		e.preventDefault();

		const formErrors = validateInputs(currentState, fields[currentPage]);

		if (formErrors.length > 0) {
			setCurrentErrors(formErrors);
		} else {
			setCurrentPage(currentPage + 1);
			setProgressBarValue(progressBarValue + 100 / (pages.length - 1));
			setCurrentErrors([]);
		}
	};

	const handlePageBackwards = e => {
		e.preventDefault();
		setCurrentPage(currentPage - 1);
	};

	const handleSend = e => {
		e.preventDefault();
		const formErrors = validateInputs(currentState, fields[currentPage - 1]);

		if (formErrors.length > 0) {
			setCurrentErrors(formErrors);
		} else {
			setProgressBarValue(0);
			setCurrentPage(0);
			setCurrentState(defaultData);
			setCurrentErrors([]);
		}
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
