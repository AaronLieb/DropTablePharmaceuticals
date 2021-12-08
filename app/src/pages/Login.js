import './Login.css';
import { useState } from "react";
import Axios from 'axios';

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		const d = {
			username: username,
			password: password,
		}
		Axios.post('http://localhost:3000/auth/login/', d).then(response=> {
			alert(response);
		})
	}

	return (
		<div class="center">
			<div className="box">
			<h2> Login </h2>
			<form onSubmit={handleSubmit}>
				<label> username: </label>
				<input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
				<label> password: </label>
				<input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
				<input type="submit" />
			</form>
			</div>
		</div>
	);
};

export default Login;
