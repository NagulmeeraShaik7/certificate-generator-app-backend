import mongoose from 'mongoose';

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
  id: { type: String, required: true, unique: true },
  categoryName: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  background: { type: String, required: true },
  design: { type: String, required: true },
});

/**
 * Mongoose model for the `Certificate` collection.
 * 
 * @type {mongoose.Model}
 */
export const CertificateModel = mongoose.model('Certificate', certificateSchema);
