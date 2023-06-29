import React from "react";
import Page from "../Page/Page";

const PageWrapper = () => {
	const defaultFormData = {
		firstName: "",
		lastName: "",
		phone: "",
		email: "",
		birthDate: "",
	};

	const defaultOptions = {
		sports: "",
		passes: "",
	};

	const defaultCheck = {
		dataConsent: "",
		healthConsent: "",
	};

	return (
		<Page
			defaultFormData={defaultFormData}
			defaultOptions={defaultOptions}
			defaultCheck={defaultCheck}
		/>
	);
};

export default PageWrapper;
