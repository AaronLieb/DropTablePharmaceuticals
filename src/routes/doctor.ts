import express from 'express';
import controller from '../controllers/doctor';

const router = express.Router();

router.post('/', controller.getAll);
router.post('/patient', controller.getPatientDoctor);
router.post('/', controller.postDoctor);

export = router;
