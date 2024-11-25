import mongoose from 'mongoose';
import { Schema } from 'mongoose';
import nameValidator from './validators/name.js';
import listValidator from './validators/list.js';
import { getNextSequenceValue } from './utils/counterOps.js';

const PartySchema = new Schema({
	name: {
		type: String,
		required: true,
		validate: nameValidator,
	},
	list: {
		type: String,
		required: true,
		validate: listValidator,
	},
	voteId: {
		type: Number,
		unique: true,
	},
}, { timestamps: true });

PartySchema.pre('save', async function (next) {
	if (this.isNew) {
		this.voteId = await getNextSequenceValue('Candidate-Party');
	}
	next();
});

PartySchema.pre('insertMany', async function (next, docs) {
	for (const doc of docs) {
		doc.voteId = await getNextSequenceValue('Candidate-Party');
	}
	next();
});

const Party = mongoose.model('Party', PartySchema);

export default Party;