import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const KeyPairSchema = new Schema({
	publicKey: {
		type: String,
		required: true,
	},
	privateKey: {
		type: String,
		required: true,
	}
}, { timestamps: true });

const KeyPair = mongoose.model('key-pair', KeyPairSchema);

export default KeyPair;