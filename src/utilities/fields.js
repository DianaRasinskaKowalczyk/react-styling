const fields = [
	[
		{
			name: "firstName",
			label: "your first name",
			required: true,
			pattern: false,
			type: "text",
			placeholder: "",
			errMessage: "is invalid",
		},
		{
			name: "lastName",
			label: "your last name",
			required: true,
			pattern: false,
			type: "text",
			placeholder: "",
			errMessage: "is invalid",
		},
		{
			name: "phone",
			label: "your phone number",
			required: true,
			pattern: /^\d{3}\d{3}\d{3}$/,
			type: "text",
			placeholder: "000000000",
			errMessage: "is invalid",
		},
		{
			name: "email",
			label: "your email address",
			required: true,
			pattern: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
			type: "text",
			placeholder: "xxxxx@xxx.xx",
			errMessage: "is invalid",
		},
		{
			name: "birthDate",
			label: "your date of birth",
			required: true,
			pattern: /[0-9]{4}-[0-9]{2}-[0-9]{2}/,
			type: "text",
			placeholder: "YYYY-MM-DD",
			errMessage: "is invalid",
		},
	],
	[
		{
			name: "sports",
			label: "Select your sport",
			required: true,
			type: "select",
			options: ["yoga", "pilates", "stretching"],
			errMessage: "please choose your sport",
		},

		{
			name: "passes",
			label: "Select your pass",
			required: true,
			type: "select",
			options: ["single pass", "weekly pass", "monthly pass"],
			errMessage: "please choose your pass",
		},
	],
	[
		{
			name: "dataConsent",
			label:
				"I hereby give consent for my personal data included in my application to be processed for the purposes of the recruitment process under the European Parliament's and Council of the European Union Regulation on the Protection of Natural Persons as of 27 April 2016, with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC.",
			required: true,
			type: "checkbox",
			value: "dataConsent",
			errMessage: "personal data consent has to be accepted",
		},
		{
			name: "healthConsent",
			label:
				"I fully understand the risks associated with exercise, including the risk of bodily injury, heart attack, stroke or even death, but knowing these risks, it is my desire to participate as herein indicated. I understand that this program may or may not benefit my physical fitness or general health.",
			required: true,
			type: "checkbox",
			value: "healthConsent",
			errMessage: "health data consent has to be accepted",
		},
	],
];

export default fields;
