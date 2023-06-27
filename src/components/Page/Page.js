import React, { useState } from "react";
import Header from "../Header/Header";
import Form from "../Form/Form";
import ButtonBox from "../ButtonBox/ButtonBox";
import ButtonSend from "../ButtonSend/ButtonSend";
import ButtonMovePage from "../ButtonMovePage/ButtonMovePage";
import ConsentForm from "../Pages/ConsentForm/ConsentForm";
import DataForm from "../Pages/DataForm/DataForm";
import SelectionForm from "../Pages/SelectionForm/SelectionForm";
import Dropdown from "../Dropdown/Dropdown ";
import fields from "../../utilities/fields";

const Page = () => {
	const defaultFormData = {
		firstName: "",
		lastName: "",
		phone: "",
		email: "",
		birthDate: "",
		sports: "",
		passes: "",
	};

	const handleForm = e => {
		e.preventDefault();
	};

	const [currentPage, setCurrentPage] = useState(1);

	const [currentState, setCurrentState] = useState(defaultFormData);

	const handleInputChange = ({ name, value }) => {
		setCurrentState({ ...currentState, [name]: value });
	};

	const selectOption = ({ option, value }) => {
		setCurrentState({ ...currentState, [option]: value });
	};

	const pages = [
		<DataForm
			fields={fields[currentPage]}
			currentState={currentState}
			onChange={handleInputChange}></DataForm>,

		<SelectionForm
			fields={fields[currentPage]}
			optionValue={currentState}
			onSelect={selectOption}></SelectionForm>,
		<ConsentForm>consent form</ConsentForm>,
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
