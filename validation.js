// This code is refactored to avoid loop holes in the webiste
function validation(name) {
	if (!name) {
		return "Username cannot be empty";
	} else if (name.length < 5) {
		return "Username must be 5 characters long";
	}

	return "Username is correct";
}

validation("rashid");
