import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const KeyPairSchema = new Schema({
	lambda: {
		type: String,
		required: true,
	},
	mu: {
		type: String,
		required: true,
	},
	publicKey: {
		n: {
			type: String,
			required: true,
		},
		g: {
			type: String,
			required: true,
		},
	},
}, { timestamps: true });

const KeyPair = mongoose.model('key-pair', KeyPairSchema);

export default KeyPair;