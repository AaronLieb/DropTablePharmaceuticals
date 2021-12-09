import './PatientHome.css';
import { JsonToTable } from "react-json-to-table";
import queryString from 'query-string'
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom'
import Axios from 'axios';

const PatientHome = () => {
	const { search } = useLocation()
	const values = queryString.parse(search)

	const [patient, setPatient] = useState("");
	const [appointments, setAppointments] = useState("");
	const [tests, setTests] = useState("");
	const [prescriptions, setPrescriptions] = useState("");

	useEffect(() =>{
		// get patient
		Axios.post('http://localhost:3000/patient/id', {id: values.id }).then(response => {
			console.log(response);		
			response.data.result && setPatient(response.data.result[0]);
		})

		// get appointments
		Axios.post('http://localhost:3000/appointment/patient', {id: values.id }).then(response => {
			console.log(response);		
			response.data.result && setAppointments(response.data.result[0]);
		})

		// get tests
		Axios.post('http://localhost:3000/test/id', {id: values.id }).then(response => {
			console.log(response);		
			response.data.result && setTests(response.data.result[0]);
		})

		// get prescriptions
		Axios.post('http://localhost:3000/prescription/id', {id: values.id }).then(response => {
			console.log(response);		
			response.data.result && setPrescriptions(response.data.result[0]);
		})
	},[])

	const createAppointment = () => {
		Axios.post('http://localhost:3000/appointment', {
			id: null,
			testId: null,
			doctorId: patient.doctor || 1,
			patientId: patient.ssn || 2,
			date: (new Date().toISOString().slice(0, 19).replace('T', ' ')),
			room: 273,
		}).then(response => {
			Axios.post('http://localhost:3000/appointment/patient', {id: values.id }).then(response => {
				console.log(response);		
				response.data.result && setAppointments(response.data.result[0]);
			})
		});
	}


	return (
		<div>
			<h1> Hello, {patient.firstName} </h1>
			<div className="patient">
				<h2> Patient </h2>
				<JsonToTable json={patient} />
			</div>
			<div className="appointments">
				<h2> Appointments </h2>
				<JsonToTable json={appointments} />
			</div>
			<a className="btn" onClick={createAppointment}> Schedule an appointment </a>
			<div className="tests">
				<h2> Tests </h2>
				<JsonToTable json={tests} />
			</div>
			<div className="prescriptions">
				<h2> Prescriptions </h2>
				<JsonToTable json={prescriptions} />
			</div>
		</div>
	);
};

export default PatientHome;
