import express from 'express'

const app = express()
const router = express.Router()

app.use(express.static('public'))

router.route('/').get((req,res)=> res.sendFile('index.html', {root: 'public'}))

// app.use(router)

// PORT ON MAC
// const PORT = 3000

// PORT ON WINDOWS
const PORT = 5000
app.listen(PORT, () => console.log(`Listening on Port: ${PORT}`))