// Make Mongoose schema and model for Candidate with Ecma modules

import mongoose from 'mongoose';
import { Schema } from 'mongoose';
import nameValidator from './validators/name.js';
import Counter from './Counter.js';

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
	nominationDistrict: {
		type: Schema.Types.ObjectId,
		ref: 'NominationDistrict',
		required: true,
	},
	hmIndex: {
        type: Number,
        unique: true,
    },
}, { timestamps: true });

CandidateSchema.pre('save', async function(next) {
    if (this.isNew) {
        try {
            const counter = await Counter.findByIdAndUpdate(
                { _id: 'candidateId' },
                { $inc: { seq: 1 } },
                { new: true, upsert: true}
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

const Candidate = mongoose.model('Candidate', CandidateSchema);

export default Candidate;