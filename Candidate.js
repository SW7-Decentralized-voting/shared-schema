// Make Mongoose schema and model for Candidate with Ecma modules

import mongoose from 'mongoose';
import { Schema } from 'mongoose';
import nameValidator from './validators/name.js';

const CandidateSchema = new Schema({
	name: {
		type: String,
		required: true,
		validate: nameValidator,
	},
	party: {
		type: Schema.Types.ObjectId,
		ref: 'Party',
		required: true,
	},
	nominationDistrict: {
		type: Schema.Types.ObjectId,
		ref: 'NominationDistrict',
		required: true,
	},
}, { timestamps: true });

const Candidate = mongoose.model('Candidate', CandidateSchema);

export default Candidate;