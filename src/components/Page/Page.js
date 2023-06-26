import React from "react";
import { useReducer } from "react";
import Form from "../Form/Form";
import DataForm from "../Pages/DataForm/DataForm";
import fields from "../../utilities/fields";

const Page = () => {
	const initFormValues = {
		firstName: "",
		lastName: "",
		phone: "",
		email: "",
		birthDate: "",
	};

	const handleSubmit = e => {
		e.preventDefault;
	};

	const reducer = (state, { name, value }) => {
		return { ...state, [name]: value };
	};

	const [state, dispatch] = useReducer(reducer, initFormValues);

	return (
		<Form onSubmit={handleSubmit}>
			<DataForm
				fields={fields}
				inputState={state}
				onchange={() => dispatch(e.target)}></DataForm>
		</Form>
	);
};

export default Page;
