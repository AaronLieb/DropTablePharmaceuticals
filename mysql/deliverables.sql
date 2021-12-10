-- #2

 CREATE VIEW STEVENS AS
 SELECT PATIENT.lastName, PATIENT.firstName, PATIENT.phone
 FROM PATIENT, DOCTOR, PRESCRIPTION
 WHERE DOCTOR.doctorId = PRESCRIPTION.doctorId
 AND PATIENT.SSN = PRESCRIPTION.patientId
 AND DOCTOR.firstName = 'Robert';

 -- #3

 CREATE VIEW VICODIN AS 
 SELECT firstName, lastName
 FROM doctor, prescription
 WHERE doctor.doctorId = prescription.doctorId
 AND name = 'Vicodin';

 -- #4

 CREATE VIEW SPECIALTIES AS
 SELECT firstName, lastName, specialty
 FROM doctor, doctorspecialty ,specialty
 WHERE doctor.doctorId = doctorspecialty.doctorId 
 AND doctorspecialty.specialtyId = specialty.specialtyId;

 -- #5

 CREATE VIEW SPECIALTIES2 AS
 SELECT firstName, lastName, specialty
 FROM doctor, doctorspecialty ,specialty
 WHERE doctor.doctorId = doctorspecialty.doctorId 
 AND doctorspecialty.specialtyId = specialty.specialtyId
     UNION ALL
 SELECT firstName, lastName, specialtyId
 FROM doctor, specialty
 WHERE doctorId NOT IN (SELECT doctorId FROM doctorspecialty);

 -- #6

 CREATE TRIGGER auditUpdate
 BEFORE UPDATE
 ON doctorspecialty
 FOR EACH ROW
 INSERT INTO audit
 SET action = 'update',
 doctorId = OLD.doctorId,
 specialty = NEW.specialtyId,
 modified = NOW();

 CREATE TRIGGER auditInsert
 BEFORE INSERT
 ON doctorspecialty
 FOR EACH ROW
 INSERT INTO audit
 SET action = 'insert',
 doctorId = NEW.doctorId,
 specialty = NEW.specialtyId,
 modified = NOW();

 -- #7

DROP TABLE IF EXISTS ACCOUNTBACK;
CREATE TABLE ACCOUNTBACK AS SELECT * FROM ACCOUNT;

DROP TABLE IF EXISTS DOCTORBACK;
CREATE TABLE DOCTORBACK AS SELECT * FROM DOCTOR;

DROP TABLE IF EXISTS PATIENTBACK;
CREATE TABLE PATIENTBACK AS SELECT * FROM PATIENT;

DROP TABLE IF EXISTS TESTBACK;
CREATE TABLE TESTBACK AS SELECT * FROM TEST;

DROP TABLE IF EXISTS PRESCRIPTIONBACK;
CREATE TABLE PRESCRIPTIONBACK AS SELECT * FROM PRESCRIPTION;

DROP TABLE IF EXISTS APPOINTMENTBACK;
CREATE TABLE APPOINTMENTBACK AS SELECT * FROM APPOINTMENT;

DROP TABLE IF EXISTS AUDITBACK;
CREATE TABLE AUDITBACK AS SELECT * FROM AUDIT;

DROP TABLE IF EXISTS SPECIALTYBACK;
CREATE TABLE SPECIALTYBACK AS SELECT * FROM SPECIALTY;

DROP TABLE IF EXISTS DOCTORSPECIALTYBACK;
CREATE TABLE DOCTORSPECIALTYBACK AS SELECT * FROM DOCTORSPECIALTY;