import mongoose from "mongoose";
import { Schema } from "mongoose";

const NominationDistrictSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	constituency: {
		type: Schema.Types.ObjectId,
		ref: "Constituency",
		required: true,
	},
}, { timestamps: true });

const NominationDistrict = mongoose.model("NominationDistrict", NominationDistrictSchema);

export default NominationDistrict;