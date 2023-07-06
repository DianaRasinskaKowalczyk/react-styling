import React from "react";
import Page from "../Page/Page";

const PageWrapper = () => {
	const defaultData = {
		firstName: "",
		lastName: "",
		phone: "",
		email: "",
		birthDate: "",
		sports: "",
		passes: "",
		dataConsent: "",
		healthConsent: "",
	};

	return <Page defaultData={defaultData} />;
};

export default PageWrapper;
