-- #1
DROP DATABASE IF EXISTS docOffice;
CREATE DATABASE docOffice;
USE docOffice;

DROP TABLE IF EXISTS ACCOUNT;
CREATE TABLE ACCOUNT(
	username varchar(45) PRIMARY KEY,
    role varchar(45),
    hash varchar(100)
);

DROP TABLE IF EXISTS DOCTOR;
CREATE TABLE DOCTOR(
	doctorId varchar(10) NOT NULL UNIQUE,
    firstName varchar(45),
    lastName varchar(45),
    salary int,
    username varchar(45),
    PRIMARY KEY (doctorId),
    FOREIGN KEY (username) REFERENCES ACCOUNT(username)
);

DROP TABLE IF EXISTS PATIENT;
CREATE TABLE PATIENT(
	SSN INT(9) UNIQUE,
    firstName varchar(45),
    lastName varchar(45),
    streetName varchar(50),
    streetNumber char(10),
    city varchar(45),
    zip varchar(10),
    insuranceId int,
    username varchar(45),
    phone char(10),
    primaryDoctor varchar(10),
    PRIMARY KEY (SSN),
    FOREIGN KEY (username) REFERENCES ACCOUNT(username),
    FOREIGN KEY (primaryDoctor) REFERENCES DOCTOR(doctorId)
);

DROP TABLE IF EXISTS TEST;
CREATE TABLE TEST(
	testId int AUTO_INCREMENT,
    doctorId varchar(10),
    patientId int(9),
    type varchar(45),
    result varchar(100),
    dateGiven datetime,
    PRIMARY KEY (testId),
    FOREIGN KEY (doctorId) REFERENCES DOCTOR(doctorId),
    FOREIGN KEY (patientId) REFERENCES PATIENT(SSN)
); 
    
DROP TABLE IF EXISTS PRESCRIPTION;
CREATE TABLE PRESCRIPTION(
	presId int AUTO_INCREMENT PRIMARY KEY,
	name varchar(45),
	dose int,
	refillCount int,
	doctorId varchar(10),
	patientId int(9),
    prescribedDate datetime,
    lastRefill datetime,
    testId int,
	FOREIGN KEY (doctorId) REFERENCES DOCTOR(doctorId),
	FOREIGN KEY (patientId) REFERENCES PATIENT(SSN),
    FOREIGN KEY (testId) REFERENCES TEST(testId)
);

DROP TABLE IF EXISTS APPOINTMENT;
CREATE TABLE APPOINTMENT(
	appId int AUTO_INCREMENT,
    testId int,
	patientId int(9),
    doctorId varchar(10),
    date datetime,
    PRIMARY KEY (appId),
    FOREIGN KEY (patientId) REFERENCES PATIENT(SSN),
    FOREIGN KEY (testId) REFERENCES TEST(testId),
    FOREIGN KEY (doctorId) REFERENCES DOCTOR(doctorId)
);

DROP TABLE IF EXISTS AUDIT;
CREATE TABLE AUDIT(
    id INT AUTO_INCREMENT PRIMARY KEY,
	doctorId varchar(10),
    action varchar(10),
    specialty varchar(20),
    modified datetime,
    FOREIGN KEY (doctorId) REFERENCES DOCTOR(doctorId)
);

DROP TABLE IF EXISTS SPECIALTY;
CREATE TABLE SPECIALTY (
    specialtyId INT auto_increment,
    specialty varchar(20),
    PRIMARY KEY (specialtyId)
);

DROP TABLE IF EXISTS DOCTORSPECIALTY;
CREATE TABLE DOCTORSPECIALTY (
    doctorId varchar(10) NOT NULL,
    specialtyId INT NOT NULL,
    PRIMARY KEY (doctorId, specialtyId),
    FOREIGN KEY (doctorId) REFERENCES DOCTOR(doctorId),
    FOREIGN KEY (specialtyId) REFERENCES SPECIALTY(specialtyId)
);
