import express from 'express';
import controller from '../controllers/doctor';

const router = express.Router();

router.post('/getAll', controller.getAll);
router.post('/patient', controller.getDoctorPatients);
router.post('/id', controller.getDoctor);
router.post('/', controller.postDoctor);

export = router;
