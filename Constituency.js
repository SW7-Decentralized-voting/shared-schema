import mongoose from "mongoose";
import { Schema } from "mongoose";

const ConstituencySchema = new Schema({
	name: {
		type: String,
		required: true,
	},
});

const Constituency = mongoose.model("Constituency", ConstituencySchema);

export default Constituency;