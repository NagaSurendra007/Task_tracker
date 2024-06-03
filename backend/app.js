const express = require ('express')
const cors = require('cors')
const app = express()
const {db} = require('./db')
const {readdirSync} = require('fs')
const loginRoutes = require('./routes/loginRoute')
const registerRoutes = require('./routes/registerRoute')
const taskRoutes = require('./routes/taskRouter')
require ('dotenv').config()

const PORT = process.env.PORT

app.use(express.json())
app.use(cors())

app.use("/api/pro",loginRoutes)
app.use("/api/pro",registerRoutes)
app.use("/api/pro",taskRoutes)


const server = () => {
  db()
  app.listen(PORT,()=> {
    console.log('you are listening to:',PORT)
  })
}
server()

