const express = require('express')
const User = require('../models/user')
const auth = require('../middleware/auth')
const router = new express.Router()

//creation endpoint for users
router.post('/users/create', async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        const token = await user.generateAuthToken()
        res.status(200).send({ user, token })
    } catch(e) {
        res.status(400).send(e)
    }
})

//login endpoint
router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByWalletAddress(req.body.walletAddress)
    } catch (e) {
        console.log(e)
    }
})