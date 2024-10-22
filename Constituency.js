import mongoose from 'mongoose';
import { Schema } from 'mongoose';
import nameValidator from './validators/name.js';

const ConstituencySchema = new Schema({
	name: {
		type: String,
		required: true,
		validate: nameValidator,
	},
}, { timestamps: true });

const Constituency = mongoose.model('Constituency', ConstituencySchema);

export default Constituency;