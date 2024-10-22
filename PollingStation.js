import mongoose from 'mongoose';
import { Schema } from 'mongoose';
import nameValidator from './validators/name.js';

const PollingStationSchema = new Schema({
	name: {
		type: String,
		required: true,
		validate: nameValidator,
	},
	expectedVoters: {
		type: Number,
		required: true,
	},
	nominationDistrict: {
		type: Schema.Types.ObjectId,
		ref: 'NominationDistrict',
		required: true,
	},
}, { timestamps: true });

const PollingStation = mongoose.model('PollingStation', PollingStationSchema);

export default PollingStation;