import express from 'express';
import { CertificateController } from '../controllers/certificate.controller.mjs';
import { ErrorHandler } from '../../../middlewares/error.middleware.mjs';

const router = express.Router();

router.post('/', CertificateController.createCertificates);
router.use(ErrorHandler.handle);

export default router; 