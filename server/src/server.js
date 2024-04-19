import express from 'express'

const app = express()

const port = 8888
app.listen(port, () => {
    console.log(`Serwer działa na porcie ${port}`)
})
