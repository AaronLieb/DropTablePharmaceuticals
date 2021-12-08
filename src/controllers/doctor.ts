import { Request, Response, NextFunction } from 'express';
import logging from '../config/logging';
import mysql from './db';

const NAMESPACE = 'Doctor Controller';

// req : {}
// res : { result }
const getAll = (req: Request, res: Response) => {
    logging.info(NAMESPACE, `Doctor endpoint called.`);
    mysql.db.query('SELECT * FROM doctor', (error, result) => {
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
const getDoctor = (req: Request, res: Response) => {
    logging.info(NAMESPACE, `getPatientDoctor called.`);

    mysql.db.query('SELECT * FROM doctor WHERE Doctor_ID = ?', [req.body['id']],
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

const getDoctorPatients = (req: Request, res: Response) => {
    logging.info(NAMESPACE, `getPatientDoctor called.`);

    mysql.db.query('SELECT * FROM patient WHERE primaryDoctor = ?', [req.body['id']],
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

const postDoctor = (req: Request, res: Response) => {
    logging.info(NAMESPACE, `postDoctor called.`);
    let { firstName, lastName, phone, specialty, salary } = req.body;

    mysql.db.query('INSERT INTO doctor VALUES (?)', [[firstName, lastName, phone, specialty, salary]],
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
    getAll,
    getDoctor,
    getDoctorPatients,
    postDoctor
};
