import Counter from '../Counter.js';

const getNextSequenceValue = async (collectionName) => {
    const counter = await Counter.findOneAndUpdate(
        { collectionName },  // Match the collection name
        { $inc: { seq: 1 } }, // Increment the sequence by 1
        { new: true, upsert: true } // Return updated document and create it if not exists
    );
    return counter.seq;
};

const resetCounter = async (collectionName, startValue = -1) => {
    const result = await Counter.findOneAndUpdate(
        { collectionName },
        { seq: startValue }, // Set seq to the desired value
        { new: true }
    );
};

export { getNextSequenceValue, resetCounter };