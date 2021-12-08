import http from 'http';
import express from 'express';
import logging from './config/logging';
import config from './config/config';
import auth from './routes/auth';
import doctor from './routes/doctor';
import patient from './routes/patient';
import appointment from './routes/appointment';
import prescription from './routes/prescription';
import test from './routes/medical_test';
import cors from 'cors';

const NAMESPACE = 'Server';
const router = express();
const corsOptions = {
    origin: '*',
    methods: ['POST', 'GET', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['*'],
	credentials: true,
}
router.use(cors(corsOptions));

// logging requests
router.use((req, res, next) => {
    logging.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}]`);

    res.on('finish', () => {
        logging.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}], STATUS - [${res.statusCode}]`);
    });

    next();
});

// Parse the request
router.use(express.urlencoded({ extended: false }));
router.use(express.json());

// Routes
router.use('/auth', auth);
router.use('/doctor', doctor);
router.use('/patient', patient);
router.use('/appointment', appointment);
router.use('/prescription', prescription);
router.use('/test', test);

// Error Handling
router.use((req, res, next) => {
    const error = new Error('not found');

    return res.status(404).json({
        message: error.message
    });
});

// Server
const httpServer = http.createServer(router);
httpServer.listen(config.server.port, () => logging.info(NAMESPACE, `Server is running on ${config.server.hostname}:${config.server.port}`));
