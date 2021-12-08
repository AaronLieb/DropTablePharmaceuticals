DROP DATABASE IF EXISTS Doc_Office;
CREATE DATABASE Doc_Office;
USE Doc_Office;
DROP TABLE IF EXISTS DOCTOR;
CREATE TABLE DOCTOR(
	  Doctor_ID int NOT NULL UNIQUE AUTO_INCREMENT,
    First_name varchar(45) ,
    Last_name varchar(45),
    Phone_number char(9),
    Specialty varchar(45),
    Salary int,
    username varchar(45),
    FOREIGN KEY (username) REFERENCES ACCOUNT(username),
    Primary Key (Doctor_ID)
    );
DROP TABLE IF EXISTS PATIENT;
CREATE TABLE PATIENT(
	  SSN char(9) UNIQUE,
    First_name varchar(45),
    Last_name varchar(45),
    Phone_number char(9),
    Street_name varchar(50),
    Street_number char(10),
    City varchar(45),
    Zip_code varchar(10),
    Insurance_ID int,
    username varchar(45),
    FOREIGN KEY (username) REFERENCES ACCOUNT(username),
    Primary Key (SSN)
    );
    
DROP TABLE IF EXISTS PRESCRIPTION;
CREATE TABLE PRESCRIPTION(
	Prescription_ID int,
	Drug_name varchar(45),
	Dosage int,
	Number_of_refills int,
	Date_prescribed char(10),
	Most_recent_filling char(10),
	Prescribed_by int AUTO_INCREMENT,
	Patient_SSN char(9),
	PRIMARY KEY (Prescription_ID),
	FOREIGN KEY (Prescribed_by) REFERENCES DOCTOR(Doctor_ID),
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

DROP TABLE IF EXISTS MEDICAL_TEST;
CREATE TABLE MEDICAL_TEST(
	  Test_ID int AUTO_INCREMENT,
    Doctor_name varchar(45),
    Doctor_ID int,
    Test_type varchar(45),
    Result varchar(100),
    Patient_SSN char(9),
    Date_given datetime,
    PRIMARY KEY (Test_ID),
    FOREIGN KEY (Doctor_ID) REFERENCES DOCTOR(Doctor_ID),
    FOREIGN KEY (Patient_SSN) REFERENCES PATIENT(SSN)
    );

DROP TABLE IF EXISTS AUDIT;
CREATE TABLE AUDIT(
	  Doctor_ID int AUTO_INCREMENT,
    Action varchar(100),
    Date_modified datetime,
    FOREIGN KEY (Doctor_ID) REFERENCES DOCTOR(Doctor_ID)
    );
    
DROP TABLE IF EXISTS ACCOUNT;
CREATE TABLE ACCOUNT(
	  username varchar(45) NOT NULL UNIQUE,
    role varchar(45),
    hash varchar(45),
    salt varchar(45)
    );
