const express = require('express')
const app = express()
const path = require('path')
require('dotenv').config()

const PORT = 5000

const videos = [
    "UKlV7B1u7fo",
    "ASoNUvE1xHU",
    "bfT4q-QA7WY",
    "4U5EyVDExIM"
]

app.get('/api/videos', (req, res) => {
    res.send(videos)
})

if (process.env.NODE_ENV !== "development") {
    app.use(express.static(path.join(__dirname, './client/build')))

    app.get('*', (req, res) => {
        res.sendFile(express.static(path.join(__dirname, './client/build/index.html', (error) => {
            if (error) {
                res.status(500).send(error)
            }
        })))
    })
}

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})