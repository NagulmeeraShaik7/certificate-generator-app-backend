import express from 'express';
import { CertificateController } from '../controllers/certificate.controller.mjs';
import { ErrorHandler } from '../../../middlewares/error.middleware.mjs';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Certificates
 *   description: API for generating certificates
 */

/**
 * @swagger
 * /:
 *   post:
 *     summary: Generate certificates for a specific category
 *     tags: [Certificates]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - categoryName
 *             properties:
 *               categoryName:
 *                 type: string
 *                 description: The category for which to generate certificates
 *                 example: Web Development
 *     responses:
 *       200:
 *         description: Certificates successfully generated
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   categoryName:
 *                     type: string
 *                   title:
 *                     type: string
 *                   description:
 *                     type: string
 *                   background:
 *                     type: string
 *                   design:
 *                     type: string
 *       400:
 *         description: Bad request (e.g., missing category name)
 *       500:
 *         description: Internal server error
 */
router.post('/', CertificateController.createCertificates);

// Global error handler middleware
router.use(ErrorHandler.handle);

export default router;
