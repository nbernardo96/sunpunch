const express = require('express');
const cors = require('cors');
const router = require('./routes/index');
const app = express()
const port = 5000


// All the middleware being used
const middleware = {
    logger: (req, res, next) => {
        console.log(`Path: ${req.url} [${req.method}]`)
        next()
    },
    cors: cors()
}

app.use(router)
app.use([middleware.cors, middleware.logger])


app.listen(port, () => {
    console.log(`Server started on port ${port}...`)
})