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
];

export default fields;
