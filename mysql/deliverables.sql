-- #2

CREATE VIEW STEVENS AS
SELECT firstName, lastName, phone
FROM patient
WHERE primaryDoctor = { 
                        SELECT doctorId
                        FROM doctor
                        WHERE firstName = 'Robert' AND lastName = 'Stevens'
                        LIMIT 1
                    };

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
WHERE doctor.doctorId = specialty.doctorId 
AND doctorspecialty.specialtyId = specialty.specialtyId;

-- #5

CREATE VIEW SPECIALTIES AS
SELECT firstName, lastName, specialty
FROM doctor, doctorspecialty ,specialty
WHERE doctor.doctorId = specialty.doctorId 
AND doctorspecialty.specialtyId = specialty.specialtyId
    UNION ALL
SELECT firstName, lastName, specialty
FROM doctor
WHERE doctorId NOT IN (SELECT doctorId FROM doctorspecialty);

-- #6

CREATE TRIGGER auditUpdate
BEFORE UPDATE
ON doctorspecialty
FOR EACH ROW
INSERT INTO audit
SET action = 'update'
doctorId = OLD.doctorId,
modified = NOW();

CREATE TRIGGER auditInsert
BEFORE INSERT
ON doctorspecialty
FOR EACH ROW
INSERT INTO audit
SET action = 'insert'
doctorId = OLD.doctorId,
specialty = NEW.specialty,
modified = NOW();

-- #7
