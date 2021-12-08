import express from 'express';
import controller from '../controllers/appointment';

const router = express.Router();

router.post('/patient', controller.getByPatient);
router.post('/doctor', controller.getByDoctor);
router.post('/', controller.postAppointment);

export = router;
