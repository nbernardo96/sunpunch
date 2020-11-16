import express from 'express';

const app = express()
const port = 5000

app.use((req, res, next) => {
    console.log(`Path: ${req.url} [${req.method}]`)
    next()
})

app.get('/', (req, res) => {
    res.send('<h1>Hello</h1>')
})

app.listen(port, () => {
    console.log('Server started...')
})