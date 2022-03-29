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

//logout endpoint
router.post('/users/logout', auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })
        await req.user.save()

        res.send()
    } catch(e) {
        res.status(500).send()
    }
})

//logout all sessions endpoint
router.post('/users/logoutAll', auth, async (req, res) => {
    try {
        req.user.tokens = []
        await user.save()

        res.send()
    } catch(e) {
        res.status(500).send()
    }
})

//specific user endpoint
router.get('/users/me', auth, async (req, res) => {

    res.send(req.user) 

})

//all users endpoint
router.get('/users', async (req, res) => {
    try {
        const users = await User.find({})
        res.send(users)
    } catch(e) {
        res.status(500).send()
    }
})

//update user data endpoint
router.patch('/users/me', auth, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'password']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        res.status(400).send({ error: 'Invalid updates!'})
    }

    try {
        
        updates.forEach((update) => req.user[update] = req.body[update])

        await req.user.save()

        // const user = await User.findByIdAndUpdate(_id, req.body, {new: true, runValidators: true})

        res.send(req.user)
    }catch(e) {
        res.status(400).send(e)
    }
})

//delete user endpoint
router.delete('/users/me', auth, async (req, res) => {
    try {
        // const user = await User.findByIdAndDelete(req.user._id)

        // if(!user) {
        //     res.status(404).send()
        // }

        await req.user.remove()

        res.send(req.user)
    }catch(e) {
        res.status(500).send()
    }
})

module.exports = router
