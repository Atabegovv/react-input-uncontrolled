function Form() {
	function formHandleSumbit(event) {
		event.preventDefault();

		const userData = {
			username: event.target.username.value,
			password: event.target.password.value,
		};

		console.log(userData);
		alert(JSON.stringify(userData));
	}

	return (
		<>
			<h2>Form login</h2>
			<form onSubmit={formHandleSumbit}>
				<label>
					login
					<input type="text" name="username" />
				</label>
				<label>
					password
					<input type="password" name="password" />
				</label>
				<button type="sumbit">SEND</button>
			</form>
		</>
	);
}

export default Form;
