import mongoose from 'mongoose';

const counterSchema = new mongoose.Schema({
    collectionName: { type: String, required: true, unique: true },
    seq: { type: Number, default: -1 },
});

const Counter = mongoose.model('Counter', counterSchema);

export default Counter;