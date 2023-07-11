import React, { useState } from "react";
import Header from "../Header/Header";
import Form from "../Form/Form";
import ButtonBox from "../ButtonBox/ButtonBox";
import Button from "../ButtonSend/Button";
import ConsentForm from "../Pages/ConsentForm/ConsentForm";
import DataForm from "../Pages/DataForm/DataForm";
import SelectionForm from "../Pages/SelectionForm/SelectionForm";
import fields from "../../utilities/fields";
import { validateInputs } from "../../utilities/validator";
import ProgressBar from "../ProgressBar/ProgressBar";
import FinalPage from "../Pages/FinalPage/FinalPage";
import ThankyouPage from "../Pages/ThankyouPage/ThankyouPage";
import ButtonMovePage from "../ButtonMovePage/ButtonMovePage";

const Page = ({ defaultData }) => {
	const [currentPage, setCurrentPage] = useState(0);
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
		<ThankyouPage>
			Thank you for filling the form. Please check your email to confirm your
			subscription.
		</ThankyouPage>,
	];

	const handlePageForwards = e => {
		e.preventDefault();

		const formErrors = validateInputs(currentState, fields[currentPage]);

		if (formErrors.length > 0) {
			setCurrentErrors(formErrors);
		} else {
			setCurrentPage(currentPage + 1);
			setProgressBarValue(progressBarValue + 100 / (pages.length - 2));
			setCurrentErrors([]);
		}
	};

	const handlePageBackwards = e => {
		e.preventDefault();
		setCurrentPage(currentPage - 2);
	};

	const handleSend = e => {
		e.preventDefault();
		setProgressBarValue(0);
		setCurrentPage(pages.length - 1);
		setCurrentState(defaultData);
		setCurrentErrors([]);
	};

	const handleConfirm = e => {
		e.preventDefault();
		setCurrentPage(0);
		setCurrentErrors([]);
		setCurrentState(defaultData);
	};

	const selectButton = () => {
		const ButtonRight = getButtonRight();

		if (currentPage === pages.length - 1) {
			return (
				<Button type='click' onClick={handleConfirm}>
					OK
				</Button>
			);
		}

		return (
			<>
				<ButtonMovePage
					type='button'
					disabled={currentPage === 0 ? true : false}
					onClick={handlePageBackwards}>
					go back
				</ButtonMovePage>
				{ButtonRight}
			</>
		);
	};

	function getButtonRight() {
		if (currentPage === pages.length - 2) {
			return (
				<Button type='submit' onClick={handleSend}>
					Send
				</Button>
			);
		}
		return (
			<ButtonMovePage type='button' onClick={handlePageForwards}>
				go forward
			</ButtonMovePage>
		);
	}

	return (
		<>
			<Header>
				<h1>REGISTRATION FORM</h1>
			</Header>
			<ProgressBar value={progressBarValue} maxValue={100} />
			<Form onSubmit={handleForm}>
				{pages[currentPage]}

				<ButtonBox>{selectButton()}</ButtonBox>
			</Form>
		</>
	);
};

export default Page;
