import express from 'express';
import controller from '../controllers/medical_test';

const router = express.Router();

router.post('/getAll', controller.getAll);
router.post('/id', controller.getTest);
router.post('/', controller.postTest);

export = router;
