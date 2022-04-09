const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const feedDataRouter = require('./routers/feedData')

const app = express()
const port = process.env.PORT || 8000

app.use(express.json())
app.use(userRouter)
app.use(feedDataRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port);
})