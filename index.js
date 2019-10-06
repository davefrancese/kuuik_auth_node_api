const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors())

// ROUTES
require('./routes/authRoutes')(app)

app.listen(PORT, ()=> {
  console.log(`Listening on ${PORT}`);
})
