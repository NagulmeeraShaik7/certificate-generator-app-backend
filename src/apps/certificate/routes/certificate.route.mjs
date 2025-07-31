import express from 'express';
import { CertificateController } from '../controllers/certificate.controller.mjs';
import { ErrorHandler } from '../../../middlewares/error.middleware.mjs';
import { API_TAGS, VALIDATION } from '../../../infrastructures/constants/constants.mjs';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Certificates
 *   description: API for generating certificates
 */

/**
 * @swagger
 * /api/certificates:
 *   post:
 *     summary: Generate certificates for a specific category
 *     description: Creates AI-generated certificates based on the provided category name. The system will generate multiple certificate variations with different titles, descriptions, and designs.
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
 *                 description: The category for which to generate certificates (e.g., Web Development, Data Science, etc.)
 *                 example: "Web Development"
 *                 minLength: 1
 *                 maxLength: 100
 *     responses:
 *       200:
 *         description: Certificates successfully generated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Certificates generated successfully"
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Certificate'
 *                 count:
 *                   type: number
 *                   description: Number of certificates generated
 *                   example: 5
 *       400:
 *         description: Bad request - Invalid or missing category name
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               message: "Category name is required"
 *               status: 400
 *               timestamp: "2024-01-15T10:30:00.000Z"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               message: "Failed to generate certificates"
 *               status: 500
 *               timestamp: "2024-01-15T10:30:00.000Z"
 */
router.post('/', CertificateController.createCertificates);

// Global error handler middleware
router.use(ErrorHandler.handle);

export default router;
