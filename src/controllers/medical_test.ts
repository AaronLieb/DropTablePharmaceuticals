import { Request, Response, NextFunction } from 'express';
import logging from '../config/logging';
import mysql from './db';

const NAMESPACE = 'Test Controller';

// req : {}
// res : { result: DataRowPackets }
const getAll = (req: Request, res: Response) => {
    logging.info(NAMESPACE, `getAll endpoint called.`);
    mysql.db.query('SELECT * FROM medical_test', (error, result) => {
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
const getTest = (req: Request, res: Response) => {
    logging.info(NAMESPACE, `getTest called.`);

    mysql.db.query('SELECT * FROM medical_test WHERE testId = ?', [req.body['id']],
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

const postTest = (req: Request, res: Response) => {
    logging.info(NAMESPACE, `postTest called.`);
    let { ssn, firstName, lastName, phone, streetName, streetNumber, city, zip, insurance } = req.body;

    mysql.db.query('INSERT INTO medical_test VALUES (?)', [[ssn, firstName, lastName, phone, streetName, streetNumber, city, zip, insurance]],
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
    getTest,
    postTest
};
