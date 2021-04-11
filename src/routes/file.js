import { Router } from 'express';
import fileController from '../controllers/file';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', loginRequired, fileController.store);

export default router;
