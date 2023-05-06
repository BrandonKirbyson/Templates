import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'

const portNumber = 8081
export const app = express()
export const port = process.env.PORT || portNumber

app.listen(port, () => console.log(`${port}`))
app.route('/').get((req, res) => res.json({ message: 'hi' }))

app.use(cors())
app.use(bodyParser.json())
