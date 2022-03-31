const mongoose = require('mongoose')

const feedDataSchema = new mongoose.Schema({
    title: {
        type: String
    },
    caption: {
        type: String,
    },
    creator: {
        type: String,
    },
    walletAddress: {
        type: String
    },
    tags: [{
        type: String
    }],
    selectedFile: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
})

const FeedData = mongoose.model('FeedData', feedDataSchema)

module.exports = FeedData