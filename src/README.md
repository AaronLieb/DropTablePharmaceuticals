
# Routes

## /Doctor
GET - / `{}`<br />
GET - /patient `{ id: int }`<br />
POST - /doctor `{ firstName, lastName, phone, specialty, salary }`

## /Patient

GET - / `{}`<br />
GET - /id `{ id: int }`<br />
POST - /patient `{ firstName, lastName, phoneNumber, streetName, streetNumber, city, zip, insurance }`

## /Appointment

GET - /patient `{ id: int }`<br />
GET - /doctor `{ id: int }`<br />
POST - / `{ test, patientId, doctorId, time, date, room }`

## /Test

GET - / `{}`<br />
GET - /id `{ id: int }`<br />
POST - / `{ docId: int, Test_type: string, Result: string, patientId: char, dateGiven: string }`<br />
PUT - /

## /Prescription

GET - / `{}`<br />
GET - /id `{ id: int }`<br />
POST - / `{ name: string, dosage: int, refills: int, datePrescribed: date, recentFilling: date, doctorId: int, patientId: int }`<br />
PUT - /

## /Auth

GET - /login `{ username, password }`<br />
POST - /signup `{ username, password, passwordConfirm }`

Written by Charlie
