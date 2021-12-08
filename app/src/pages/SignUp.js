import './Login.css';
import { useState } from "react";
import Axios from 'axios';
import {Navigate} from 'react-router-dom';

const SignUp = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [role, setRole] = useState("");
	const [firstName, setFirstName] = useState("");
	const [ssn, setSSN] = useState("");
	const [redirect, redirectTo] = useState("");


	const handleSubmit = (event) => {
		event.preventDefault();
		const d = {
			username: username,
			password: password,
			passwordConfirm: password,
			role: role,
		}

		Axios.post('http://localhost:3000/auth/signup/', d).then(response => {
			if (response.status !== 200) {
				return;
			}
			alert("role: " + role);
			if (role === "patient") {
				let body = {
					ssn: ssn,
					firstName: firstName,
					lastName: 'lastName',
					streetName: "Yorba",
					streetNumber: "15",
					city: "Fullerton",
					zip: "92831",
					insurance: 3773727,
					phone: '9093236754',
					username: username,

				}
				Axios.post(`http://localhost:3000/patient/`, body).then(response => {
					redirectTo(role);
				})
			} else {
				console.log('doc');
			}
		})


		
	}
	
	if (redirect === "patient") return <Navigate to='/patient' />
	if (redirect === "doctor") return <Navigate to='/doctor' />

	return (
		<div class="center">
			<div className="box">
			<h2> Login </h2>
			<form onSubmit={handleSubmit}>
				<label> username: </label>
				<input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
				<label> password: </label>
				<input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
				<label> First Name: </label>
				<input type="text" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
				<label> Last Name: </label>
				<input type="text" name="lastName" />
				<label> SSN: </label>
				<input type="text" name="ssn" value={ssn} onChange={(e) => setSSN(e.target.value)}/>
				<div class="horizontal">
					<label> Patient </label>
					<input type="radio" name="accounttype" value="patient" onChange={(e) => setRole(e.target.value)} />
					<label> Doctor </label>
					<input type="radio" name="accounttype" value="doctor" onChange={(e) => setRole(e.target.value)}/>
				</div>
				<input type="submit" />
			</form>
			</div>
		</div>
	);
};

export default SignUp;
