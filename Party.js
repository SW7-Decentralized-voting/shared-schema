import mongoose from 'mongoose';
import { Schema } from 'mongoose';
import nameValidator from './validators/name.js';
import listValidator from './validators/list.js';

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
}, { timestamps: true });

const Party = mongoose.model('Party', PartySchema);

export default Party;