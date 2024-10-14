// Make Mongoose schema and model for Candidate with Ecma modules

import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const CandidateSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		unique: true,
	},
	phone: {
		type: String,
		unique: true,
	},
	address: {
		type: String,
	},
	resume: {
		type: String,
	},
	job: {
		type: Schema.Types.ObjectId,
		ref: 'Job',
	},
	status: {
		type: String,
		enum: ['pending', 'approved', 'rejected'],
		default: 'pending',
	},
});

const Candidate = mongoose.model('Candidate', CandidateSchema);

export default Candidate;