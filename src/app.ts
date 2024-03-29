import express from 'express'
import { router } from './routes'
import session from 'express-session'

const app = express()

app.use(express.json())
app.use(session({ secret: 'livinhalinda', resave: false, saveUninitialized: true }))
app.use(router)

app.listen(3000, () => console.log('Server is running..'))