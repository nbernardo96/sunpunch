import express from 'express';
import cors from 'cors';

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

app.use([middleware.cors, middleware.logger])



app.get('/', (req, res) => {
    res.send('<h1>Hello</h1>')
})

app.listen(port, () => {
    console.log('Server started...')
})