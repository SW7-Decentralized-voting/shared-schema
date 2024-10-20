import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const KeySchema = new Schema({
	keyHash: {
		type: String,
		required: true,
	},
	pollingStation: {
		type: Schema.Types.ObjectId,
		ref: 'PollintStation',
		required: true,
	},
}, { timestamps: true });

const PollingStation = mongoose.model('Key', KeySchema);

export default PollingStation;