export function validateInputs(inputData, fieldsArr) {
	let errors = [];

	fieldsArr.forEach(field => {
		const value = inputData[field.name];

		if (field.required) {
			if (
				(value.length < 2 &&
					field.name !== "email" &&
					field.name !== "phone" &&
					field.name !== "birthDate") ||
				value === false ||
				!value
			) {
				errors.push({
					name: field.name,
					message: field.errMessage,
				});
			}
		}

		if (field.pattern) {
			const reg = new RegExp(field.pattern);
			if (!reg.test(value)) {
				errors.push({
					name: field.name,
					message: field.errMessage,
				});
			}
		}
	});

	return errors;
}
