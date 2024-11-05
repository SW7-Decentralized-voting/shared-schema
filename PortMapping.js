import { ObjectId } from "bson";
import mongoose from "mongoose";
import { Schema, ObjectId } from "mongoose";

const PortMappingSchema = new Schema({
	port: {
		type: Number,
		unique: true,
		required: true,
	},
	pollingStation: {
		type: ObjectId,
		ref: "PollingStation",
		required: true,
	}
}, { timestamps: true });

const PortMapping = mongoose.model('port-mapping', PortMappingSchema);

export default PortMapping;
