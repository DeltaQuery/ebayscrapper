const express = require("express")
const app = express()
const cors = require("cors")
const { checkStock } = require("./ebay")

app.use(cors()) 

app.use(express.json())

app.get("/", (request, response) => {
    response.send("Hello world!")
})

const PORT = process.env.PORT
app.listen(PORT, () => {
    setInterval(() => {
        checkStock()
    }, 300000)
    
    console.log(`Server running on port ${PORT}`)
})

