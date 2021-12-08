import express from 'express';
import controller from '../controllers/medical_test';

const router = express.Router();

router.get('/', controller.getAll);
router.get('/id', controller.getTest);
router.post('/', controller.postTest);

export = router;
