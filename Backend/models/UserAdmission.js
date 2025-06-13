const mongoose = require('mongoose');

const admissionSchema = new mongoose.Schema({
  studentName: { type: String, required: true },
  studentClass: { type: String, required: true },
  studentAddress: { type: String, required: true },
  studentContact: { type: String, required: true },
  schoolName: { type: String, required: true },
  schoolTime: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Admission', admissionSchema);
