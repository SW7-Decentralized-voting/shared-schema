import mongoose from "mongoose";
import { Schema } from "mongoose";

const NominationDistrictSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	constituencyId: {
		type: Schema.Types.ObjectId,
		ref: "Constituency",
		required: true,
	},
});

const NominationDistrict = mongoose.model("NominationDistrict", NominationDistrictSchema);

export default NominationDistrict;