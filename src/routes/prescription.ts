import express from 'express';
import controller from '../controllers/prescription';

const router = express.Router();

router.post('/', controller.getAll);
router.post('/id', controller.getPrescription);
router.post('/', controller.postPrescription);

export = router;
