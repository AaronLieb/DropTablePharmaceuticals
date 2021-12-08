DROP DATABASE IF EXISTS Doc_Office;
CREATE DATABASE Doc_Office;
USE Doc_Office;
DROP TABLE IF EXISTS DOCTOR;

DROP TABLE IF EXISTS ACCOUNT;
CREATE TABLE ACCOUNT(
	username varchar(45) NOT NULL UNIQUE,
    role varchar(45),
    hash varchar(100)
    );
CREATE TABLE DOCTOR(
	Doctor_ID int NOT NULL UNIQUE AUTO_INCREMENT,
    First_name varchar(45) ,
    Last_name varchar(45),
    Specialty varchar(45),
    Salary int,
    username varchar(45),
    Phone_number char(10),
    FOREIGN KEY (username) REFERENCES ACCOUNT(username),
    Primary Key (Doctor_ID)
    );
DROP TABLE IF EXISTS PATIENT;
CREATE TABLE PATIENT(
	  SSN char(9) UNIQUE,
    First_name varchar(45),
    Last_name varchar(45),
    Street_name varchar(50),
    Street_number char(10),
    City varchar(45),
    Zip_code varchar(10),
    Insurance_ID int,
    username varchar(45),
    Phone_number char(10),
    primaryDoctor INT,
    FOREIGN KEY (username) REFERENCES ACCOUNT(username),
    FOREIGN KEY (primaryDoctor) REFERENCES DOCTOR(Doctor_ID),
    Primary Key (SSN)
    );
    
DROP TABLE IF EXISTS PRESCRIPTION;
CREATE TABLE PRESCRIPTION(
	Prescription_ID int,
	Drug_name varchar(45),
	Dosage int,
	Number_of_refills int,
	Prescribed_by int AUTO_INCREMENT,
	Patient_SSN char(9),
    Date_prescribed datetime,
    Most_recent_filling datetime,
	PRIMARY KEY (Prescription_ID),
	FOREIGN KEY (Prescribed_by) REFERENCES DOCTOR(Doctor_ID),
	FOREIGN KEY (Patient_SSN) REFERENCES PATIENT(SSN)
);

DROP TABLE IF EXISTS MEDICAL_TEST;
CREATE TABLE MEDICAL_TEST(
	  Test_ID int AUTO_INCREMENT,
    Doctor_ID int,
    Test_type varchar(45),
    Result varchar(100),
    Patient_SSN char(9),
    Date_given datetime,
    PRIMARY KEY (Test_ID),
    FOREIGN KEY (Doctor_ID) REFERENCES DOCTOR(Doctor_ID),
    FOREIGN KEY (Patient_SSN) REFERENCES PATIENT(SSN)
);

DROP TABLE IF EXISTS APPOINTMENT;
CREATE TABLE APPOINTMENT(
	Appointment_number int,
    Test_given int,
	Patient_SSN char(9),
    Doctor_ID int AUTO_INCREMENT,
    Date datetime,
    Room_number int,
    PRIMARY KEY (Appointment_number),
    FOREIGN KEY (Patient_SSN) REFERENCES PATIENT(SSN),
    FOREIGN KEY (Test_given) REFERENCES MEDICAL_TEST(Test_ID),
    FOREIGN KEY (Doctor_ID) REFERENCES DOCTOR(Doctor_ID)
    );

DROP TABLE IF EXISTS AUDIT;
CREATE TABLE AUDIT(
	Doctor_ID int AUTO_INCREMENT,
    Action varchar(100),
    Date_modified datetime,
    FOREIGN KEY (Doctor_ID) REFERENCES DOCTOR(Doctor_ID)
    );

DROP TABLE IF EXISTS DOCTORPATIENT
CREATE TABLE DOCTORPATIENT (
  `doctorId` INT NOT NULL,
  `patientSSN` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`doctorId`, `patientSSN`),
  CONSTRAINT `doctorId`
    FOREIGN KEY (`doctorId`)
    REFERENCES `doc_office`.`doctor` (`Doctor_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `patientId`
    FOREIGN KEY (`patientSSN`)
    REFERENCES `doc_office`.`patient` (`Patient_SSN`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
);

