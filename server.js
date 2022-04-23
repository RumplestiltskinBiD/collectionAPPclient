const express = require('express')
const app = express()

const PORT = process.env.PORT || 80

app.listen(PORT, () => {
    console.log("Hello, i'm server")
})