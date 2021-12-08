
# Routes

## /Doctor
GET - / `{}`<br />
GET - /patient `{ id: int }`<br />
POST - /doctor `[firstName, lastName, phone, specialty, salary]`

## /Patient

GET - / `{}`<br />
GET - /id `{ id: int }`<br />
POST - /patient
`{ firstName, lastName, phoneNumber, streetName, streetNumber, city, zip, insurance }`

## /Appointments

GET - /patient `{ id: int }`<br />
GET - /doctor `{ id: int }`<br />
POST - / `{ test, patientId, doctorId, time, date, room }`

## /Auth

GET - /login { username, password }
POST - /signup { username, password, passwordConfirm }
