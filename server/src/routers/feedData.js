const express = require('express')
const FeedData = require('../models/feedData')
const router = express.Router()

router.get('/feed', async (req, res) => {
    try {
        const feed = await FeedData.find()
        res.status(200).send(feed)
    } catch(e) {
        res.status(404).send(e)
    }
})

router.post('/feed', async (req, res) => {
    const feed = req.body

    const feedData = new FeedData({feed})

    try {
        await feedData.save()
        res.status(200).send(feedData)
    } catch(e) {
        res.status(400).send(e)
    }
})

module.exports = router