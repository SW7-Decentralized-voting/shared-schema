// Make Mongoose schema and model for Candidate with Ecma modules

import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const CandidateSchema = new Schema({
	name: {
		type: String,
		required: true,
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
});

const Candidate = mongoose.model('Candidate', CandidateSchema);

export default Candidate;