USE docOffice;
INSERT INTO ACCOUNT
VALUES ('Johnnyboi', 'Doctor', 'john2$') ON DUPLICATE KEY UPDATE username = username;
INSERT INTO ACCOUNT
VALUES ('Superman', 'Doctor', 'password') ON DUPLICATE KEY UPDATE username = username;
INSERT INTO ACCOUNT
VALUES ('Bigdog', 'Doctor', 'Hello123') ON DUPLICATE KEY UPDATE username = username;
INSERT INTO ACCOUNT
VALUES ('doc', 'Doctor', 'Doctors4lyfe') ON DUPLICATE KEY UPDATE username = username;
INSERT INTO ACCOUNT
VALUES ('Vagrant', 'Patient', 'puppy24') ON DUPLICATE KEY UPDATE username = username;
INSERT INTO ACCOUNT
VALUES ('Questions', 'Patient', 'Socal4ever') ON DUPLICATE KEY UPDATE username = username;
INSERT INTO ACCOUNT
VALUES ('Joji', 'Patient', '88rising') ON DUPLICATE KEY UPDATE username = username;
INSERT INTO ACCOUNT
VALUES ('purpleyen', 'Patient', 'kendamajaz') ON DUPLICATE KEY UPDATE username = username;

INSERT INTO DOCTOR (doctorId, firstName, lastName, salary, username)
VALUES('JS1', 'John', 'Smith', 150000, 'Johnnyboi') ON DUPLICATE KEY UPDATE username = username;
INSERT INTO DOCTOR (doctorId, firstName, lastName, salary, username)
VALUES('CK1', 'Clark', 'Kent', 130000, 'Superman') ON DUPLICATE KEY UPDATE username = username;
INSERT INTO DOCTOR (doctorId, firstName, lastName, salary, username)
VALUES('LJ1', 'Lebron', 'James', 180000, 'Bigdog') ON DUPLICATE KEY UPDATE username = username;
INSERT INTO DOCTOR (doctorId, firstName, lastName, salary, username)
VALUES('MF1', 'Morgan', 'Freeman', 140000, 'doc') ON DUPLICATE KEY UPDATE username = username;

INSERT INTO PATIENT
VALUES('123456789', 'Tom', 'Hanks','River Street', '123', 'Los Angeles', '45675', 1, 'Vagrant','2345671243', 'JS1') ON DUPLICATE KEY UPDATE SSN = SSN;
INSERT INTO PATIENT
VALUES('111222333', 'Chris', 'Evans','America Ave', '987', 'Brooklyn', '17843', 2, 'Questions','7653498126', 'CK1') ON DUPLICATE KEY UPDATE SSN = SSN;
INSERT INTO PATIENT
VALUES('444555666', 'Hugh', 'Jackman','Wolvering Street', '444', 'San Diego', '78432', 3, 'Joji','1112223334', 'LJ1') ON DUPLICATE KEY UPDATE SSN = SSN;
INSERT INTO PATIENT
VALUES('777888999', 'Leonardo', 'DiCaprio','inception Way', '456', 'London', '0345', 4, 'purpleyen','9998887776', 'MF1') ON DUPLICATE KEY UPDATE SSN = SSN;

INSERT INTO TEST
VALUES(0, 'JS1', 123456789, 'Check-up', 'Passed', '2021-01-21 07:45:23') ON DUPLICATE KEY UPDATE testId = testId;
INSERT INTO TEST
VALUES(0, 'CK1', 111222333, 'Allergy Testing', '2 Allergies', '2021-06-15 13:32:54') ON DUPLICATE KEY UPDATE testId = testId;
INSERT INTO TEST
VALUES(0, 'LJ1', 444555666,'Measurements', 'Height: 5 Foot 8 Inches', '2021-03-10 14:02:45') ON DUPLICATE KEY UPDATE testId = testId;
INSERT INTO TEST
VALUES(0, 'MF1', 777888999, 'Imaging', 'Passed', '2021-10-02 09:10:43') ON DUPLICATE KEY UPDATE testId = testId;

INSERT INTO PRESCRIPTION
VALUES(0, 'Atorvastatin',  2, 4, 'JS1', '123456789', '2021-01-21 08:45:23', '2021-02-21 12:45:21', 1) ON DUPLICATE KEY UPDATE presId = presId;
INSERT INTO PRESCRIPTION
VALUES(0, 'Lisinopril',  1, 2, 'CK1', '111222333', '2021-06-15 14:32:54', '2021-07-15 9:20:12', 2) ON DUPLICATE KEY UPDATE presId = presId;
INSERT INTO PRESCRIPTION
VALUES(0, 'Metformin',  5, 1, 'LJ1', '444555666', '2021-03-10 15:02:45', '2021-04-10 11:30:40', 1) ON DUPLICATE KEY UPDATE presId = presId;
INSERT INTO PRESCRIPTION
VALUES(0, 'Amlodipine',  3, 2, 'MF1', '777888999', '2021-10-02 09:10:43', '2021-11-02 10:50:30', 2) ON DUPLICATE KEY UPDATE presId = presId;

INSERT INTO APPOINTMENT
VALUES(0, 1,'123456789', 'JS1', '2021-01-21 07:30:23') ON DUPLICATE KEY UPDATE appId = appId;
INSERT INTO APPOINTMENT
VALUES(0, 2,'111222333', 'CK1', '2021-06-15 13:00:54') ON DUPLICATE KEY UPDATE appId = appId;
INSERT INTO APPOINTMENT
VALUES(0, 3,'444555666', 'LJ1', '2021-03-10 13:30:45') ON DUPLICATE KEY UPDATE appId = appId;
INSERT INTO APPOINTMENT
VALUES(0, 4,'777888999', 'MF1', '2021-10-02 09:00:43') ON DUPLICATE KEY UPDATE appId = appId;
