import mongoose from "mongoose";
import { Schema } from "mongoose";

const PortMappingSchema = new Schema({
	port: {
		type: Number,
		unique: true,
		required: true,
	},
	pollingStation: {
		type: Schema.Types.ObjectId,
		ref: "PollingStation",
		required: true,
	}
}, { timestamps: true });

const PortMapping = mongoose.model('port-mapping', PortMappingSchema);

export default PortMapping;
