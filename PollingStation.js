import mongoose from "mongoose";
import { Schema } from "mongoose";

const PollingStationSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	nominationDistrict: {
		type: Schema.Types.ObjectId,
		ref: "NominationDistrict",
		required: true,
	},
}, { timestamps: true });

const PollingStation = mongoose.model("PollingStation", PollingStationSchema);

export default PollingStation;