
# Routes

## /Doctor
POST - / `{}`<br />
POST - /patient `{ id: int }`<br />
POST - /doctor `{ firstName, lastName, phone, specialty, salary }`

## /Patient

POST - /getAll `{}`<br />
POST - /id `{ id: int }`<br />
POST - / `{ firstName, lastName, phoneNumber, streetName, streetNumber, city, zip, insurance }`

## /Appointment

POST - /patient `{ id: int }`<br />
POST - /doctor `{ id: int }`<br />
POST - / `{ test, patientId, doctorId, time, date, room }`

## /Test

POST - /getAll `{}`<br />
POST - /id `{ id: int }`<br />
POST - / `{ docId: int, Test_type: string, Result: string, patientId: char, dateGiven: string }`<br />

## /Prescription

POST - /getAll `{}`<br />
POST - /id `{ id: int }`<br />
POST - / `{ name: string, dosage: int, refills: int, datePrescribed: date, recentFilling: date, doctorId: int, patientId: int }`<br />

## /Auth

POST - /login `{ username, password }`<br />
POST - /signup `{ username, password, passwordConfirm }`

Written by Charlie
