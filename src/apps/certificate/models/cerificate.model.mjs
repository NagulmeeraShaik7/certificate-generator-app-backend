import mongoose from 'mongoose';
import { CERTIFICATE_MODEL } from '../../../infrastructures/constants/constants.mjs';

/**
 * Mongoose schema for storing certificate details.
 * 
 * Fields:
 * - `id` (String): A unique identifier for the certificate.
 * - `categoryName` (String): The category this certificate belongs to (e.g., "Web Development").
 * - `title` (String): The title of the certificate.
 * - `description` (String): A brief description of the certificate.
 * - `background` (String): The URL or path to the background image used in the certificate.
 * - `design` (String): JSON or string data representing design configuration.
 */
const certificateSchema = new mongoose.Schema({
  [CERTIFICATE_MODEL.FIELDS.ID]: { type: String, required: true, unique: true },
  [CERTIFICATE_MODEL.FIELDS.CATEGORY_NAME]: { type: String, required: true },
  [CERTIFICATE_MODEL.FIELDS.TITLE]: { type: String, required: true },
  [CERTIFICATE_MODEL.FIELDS.DESCRIPTION]: { type: String, required: true },
  [CERTIFICATE_MODEL.FIELDS.BACKGROUND]: { type: String, required: true },
  [CERTIFICATE_MODEL.FIELDS.DESIGN]: { type: String, required: true },
});

/**
 * Mongoose model for the `Certificate` collection.
 * 
 * @type {mongoose.Model}
 */
export const CertificateModel = mongoose.model(CERTIFICATE_MODEL.COLLECTION_NAME, certificateSchema);
