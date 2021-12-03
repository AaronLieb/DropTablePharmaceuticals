import express from 'express';
import controller from '../controllers/doctor';

const router = express.Router();

router.get('/', controller.getAll);
router.get('/patient', controller.getPatientDoctor);
router.post('/', controller.postDoctor);

export = router;
