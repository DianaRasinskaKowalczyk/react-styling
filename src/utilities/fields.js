const fields = [
	[
		{
			name: "firstName",
			label: "your first name",
			required: true,
			pattern: false,
			type: "text",
			placeholder: "",
		},
		{
			name: "lastName",
			label: "your last name",
			required: true,
			pattern: false,
			type: "text",
			placeholder: "",
		},
		{
			name: "phone",
			label: "your phone number",
			required: true,
			pattern: /^\d{3}-\d{3}-\d{3}$/,
			type: "text",
			placeholder: "000-000-000",
		},
		{
			name: "email",
			label: "your email address",
			required: true,
			pattern: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
			type: "text",
			placeholder: "xxxxx@xxx.xx",
		},
		{
			name: "birthDate",
			label: "your date of birth",
			required: true,
			pattern: /[0-9]{4}-[0-9]{2}-[0-9]{2}/,
			type: "number",
			placeholder: "YYYY-MM-DD",
		},
	],
	[
		{
			name: "sports",
			label: "Select your sport",
			required: true,
			type: "select",
			options: ["yoga", "pilates", "stretching"],
		},

		{
			name: "passes",
			label: "Select your pass",
			required: true,
			type: "select",
			options: ["single pass", "weekly pass", "monthly pass"],
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
		},
		{
			name: "healthConsent",
			label:
				"I fully understand the risks associated with exercise, including the risk of bodily injury, heart attack, stroke or even death, but knowing these risks, it is my desire to participate as herein indicated. I understand that this program may or may not benefit my physical fitness or general health.",
			required: true,
			type: "checkbox",
			value: "healthConsent",
		},
	],
];

export default fields;
