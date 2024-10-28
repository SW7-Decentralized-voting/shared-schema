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
	hmIndex: {
        type: Number,
        unique: true,
    },
}, { timestamps: true });

PartySchema.pre('save', async function(next) {
	if (this.isNew) {
		try {
			const counter = await Counter.findByIdAndUpdate(
				{ _id: 'partyId' },
				{ $inc: { seq: 1 } },
				{ new: true, upsert: true }
			);
			this.hmIndex = counter.seq;
			next();
		} catch (error) {
			next(error);
		}
	} else {
		next();
	}
});

const Party = mongoose.model('Party', PartySchema);

export default Party;