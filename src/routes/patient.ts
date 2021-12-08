import express from 'express';
import controller from '../controllers/patient';

const router = express.Router();

router.post('/', controller.getAll);
router.post('/id', controller.getPatient);
router.post('/', controller.postPatient);

export = router;
