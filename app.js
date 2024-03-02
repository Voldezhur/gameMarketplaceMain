const express = require('express')
const app = express()
const port = 3000
const routers = require('./routers')

app.use('/api', routers.router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})