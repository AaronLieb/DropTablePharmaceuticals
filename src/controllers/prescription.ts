import { Request, Response, NextFunction } from 'express';
import logging from '../config/logging';
import mysql from './db';

const NAMESPACE = 'Prescription Controller';

// req : {}
// res : { result: DataRowPackets }
const getAll = (req: Request, res: Response) => {
    logging.info(NAMESPACE, `getAll endpoint called.`);
    mysql.db.query('SELECT * FROM prescription', (error, result) => {
        if (error) {
            logging.error(NAMESPACE, 'Could not perform query', error);
            res.status(400).json(error);
        } else {
            return res.status(200).json({
                result: result
            });
        }
    });
};

const getPrescription = (req: Request, res: Response) => {
    logging.info(NAMESPACE, `getPrescription endpoint called.`);
    mysql.db.query('SELECT * FROM prescription WHERE Patient_SSN = ?', [req.body['id']], (error, result) => {
        if (error) {
            logging.error(NAMESPACE, 'Could not perform query', error);
            res.status(400).json(error);
        } else {
            return res.status(200).json({
                result: result
            });
        }
    });
};

const postPrescription = (req: Request, res: Response) => {
    logging.info(NAMESPACE, `postDoctor called.`);
    let { name, dosage, refills, datePrescribed, recentFilling, doctorId, patientId } = req.body;

    mysql.db.query('INSERT INTO prescription VALUES (?)', [[name, dosage, refills, datePrescribed, recentFilling, doctorId, patientId]],
     (error, result) => {
        if (error) {
            logging.error(NAMESPACE, 'Could not perform query', error);
            res.status(400).json(error);
        } else {
            return res.status(200).json({
                result: result
            });
        }
    });
};

export default{
    getAll,
    getPrescription,
    postPrescription
}