import mongoose from 'mongoose';

const certificateSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  categoryName: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  background: { type: String, required: true },
  design: { type: String, required: true },
}); 

export const CertificateModel = mongoose.model('Certificate', certificateSchema);