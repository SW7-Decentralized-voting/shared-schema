// Make Mongoose schema and model for Candidate with Ecma modules

import mongoose from 'mongoose';
import { Schema } from 'mongoose';
import nameValidator from './validators/name.js';
import { getNextSequenceValue } from './utils/counterOps.js';

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
	voteId: {
		type: Number,
		unique: true,
	},
	nominationDistrict: {
		type: Schema.Types.ObjectId,
		ref: 'NominationDistrict',
		required: true,
	},
}, { timestamps: true });

CandidateSchema.pre('save', async function (next) {
	if (this.isNew) {
		this.voteId = await getNextSequenceValue('Candidate-Party');
	}
	next();
});

CandidateSchema.pre('insertMany', async function (next, docs) {
	for (const doc of docs) {
		doc.voteId = await getNextSequenceValue('Candidate-Party');
	}
	next();
});

const Candidate = mongoose.model('Candidate', CandidateSchema);

export default Candidate;