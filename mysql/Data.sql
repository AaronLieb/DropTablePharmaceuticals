INSERT INTO ACCOUNT
VALUES ('Johnnyboi', 'Doctor', 'john2$');
INSERT INTO ACCOUNT
VALUES ('Superman', 'Doctor', 'password');
INSERT INTO ACCOUNT
VALUES ('Bigdog', 'Doctor', 'Hello123');
INSERT INTO ACCOUNT
VALUES ('doc', 'Doctor', 'Doctors4lyfe');
INSERT INTO ACCOUNT
VALUES ('Vagrant', 'Patient', 'puppy24');
INSERT INTO ACCOUNT
VALUES ('Questions', 'Patient', 'Socal4ever');
INSERT INTO ACCOUNT
VALUES ('Joji', 'Patient', '88rising');
INSERT INTO ACCOUNT
VALUES ('purpleyen', 'Patient', 'kendamajaz');

SELECT * FROM DOCTOR;

INSERT INTO DOCTOR (First_name, Last_name, Specialty, Salary, username, Phone_number)
VALUES('John', 'Smith','Surgeon', 150000, 'Johnnyboi', '4356781234');
INSERT INTO DOCTOR (First_name, Last_name, Specialty, Salary, username, Phone_number)
VALUES('Clark', 'Kent','Neurologist', 130000, 'Superman', '123456789');
INSERT INTO DOCTOR (First_name, Last_name, Specialty, Salary, username, Phone_number)
VALUES('Lebron', 'James','Anethesiologist', 180000, 'Bigdog', '987654321');
INSERT INTO DOCTOR (First_name, Last_name, Specialty, Salary, username, Phone_number)
VALUES('Morgan', 'Freeman','Dermatologist', 140000, 'doc', '1231231234');

SELECT * FROM PATIENT;

INSERT INTO PATIENT
VALUES('123456789', 'Tom', 'Hanks','River Street', '123', 'Los Angeles', '45675', 1, 'Vagrant','2345671243');
INSERT INTO PATIENT
VALUES('111222333', 'Chris', 'Evans','America Ave', '987', 'Brooklyn', '17843', 2, 'Questions','7653498126');
INSERT INTO PATIENT
VALUES('444555666', 'Hugh', 'Jackman','Wolvering Street', '444', 'San Diego', '78432', 3, 'Joji','1112223334');
INSERT INTO PATIENT
VALUES('777888999', 'Leonardo', 'DiCaprio','inception Way', '456', 'London', '0345', 4, 'purpleyen','9998887776');

SELECT * FROM PRESCRIPTION;

INSERT INTO PRESCRIPTION
VALUES(1, 'Atorvastatin',  2, 4, 1, '123456789', '2021-01-21 08:45:23', '2021-02-21 12:45:21');
INSERT INTO PRESCRIPTION
VALUES(2, 'Lisinopril',  1, 2, 2, '111222333', '2021-06-15 14:32:54', '2021-07-15 9:20:12');
INSERT INTO PRESCRIPTION
VALUES(3, 'Metformin',  5, 1, 3, '444555666', '2021-03-10 15:02:45', '2021-04-10 11:30:40');
INSERT INTO PRESCRIPTION
VALUES(4, 'Amlodipine',  3, 2, 4, '777888999', '2021-10-02 09:10:43', '2021-11-02 10:50:30');


SELECT * FROM MEDICAL_TEST;

INSERT INTO MEDICAL_TEST
VALUES(1, 1, 'Check-up', 'Passed', '123456789', '2021-01-21 07:45:23');
INSERT INTO MEDICAL_TEST
VALUES(2, 2, 'Allergy Testing', '2 Allergies', '111222333', '2021-06-15 13:32:54');
INSERT INTO MEDICAL_TEST
VALUES(3, 3, 'Measurements', 'Height: 5 Foot 8 Inches', '444555666', '2021-03-10 14:02:45');
INSERT INTO MEDICAL_TEST
VALUES(4, 4, 'Imaging', 'Passed', '777888999', '2021-10-02 09:10:43');

SELECT * FROM APPOINTMENT;

INSERT INTO APPOINTMENT
VALUES(1, 1,'123456789', 1, '2021-01-21 07:30:23', 231);
INSERT INTO APPOINTMENT
VALUES(2, 2,'111222333', 2, '2021-06-15 13:00:54', 250);
INSERT INTO APPOINTMENT
VALUES(3, 3,'444555666', 3, '2021-03-10 13:30:45', 240);
INSERT INTO APPOINTMENT
VALUES(4, 4,'777888999', 4, '2021-10-02 09:00:43', 230);

SELECT * FROM AUDIT;

INSERT INTO AUDIT
VALUES(1, 'Restock', '2021-01-21 17:30:23');
INSERT INTO AUDIT
VALUES(2, 'New Scrubs', '2021-11-27 12:00:54');
INSERT INTO AUDIT
VALUES(3, 'Calibrate Machines', '2021-03-10 07:00:45');
INSERT INTO AUDIT
VALUES(4, 'Organized Files', '2021-01-03 07:00:43');
