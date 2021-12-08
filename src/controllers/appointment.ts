import { Request, Response, NextFunction } from 'express';
import logging from '../config/logging';
import mysql from './db';

const NAMESPACE = 'Appointment Controller';

// req : { id: int }
// res : { result: DataRowPackets }
const getByPatient = (req: Request, res: Response) => {
    logging.info(NAMESPACE, `GetByPatient endpoint called.`);
    mysql.db.query('SELECT * FROM appointment WHERE patientId = ?', [req.body['id']],
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

// req : { id: int }
// res : { result }
const getByDoctor = (req: Request, res: Response) => {
    logging.info(NAMESPACE, `getPatientDoctor called.`);

    mysql.db.query('SELECT * FROM appointment WHERE doctorId = ?', [req.body['id']],
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

const postAppointment = (req: Request, res: Response) => {
    logging.info(NAMESPACE, `postDoctor called.`);
    let { test, patientId, doctorId, time, date, room } = req.body;

    mysql.db.query('INSERT INTO appointment VALUES (?)', [[test, patientId, doctorId, time, date, room]],
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


export default {
    getByPatient,
    getByDoctor,
    postAppointment
};
