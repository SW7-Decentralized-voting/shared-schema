import mongoose from "mongoose";
import { Schema } from "mongoose";

const PartySchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	list: {
		type: String,
		required: true,
	},
});

const Party = mongoose.model("Party", PartySchema);

export default Party;