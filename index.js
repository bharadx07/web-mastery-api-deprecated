const express = require("express")


//Server App
const app = express()

//API Versioning
const VERSION = 1

//Public API routes
const Tutorials = require("./routes/tutorials")

app.use(`/api/v${VERSION}/tutorials`, Tutorials)


  
//Private API routes 
 
app.get("/", (req,res) => {
  res.sendFile(`${__dirname}/entry.api.html`)
})
  

const PORT = process.env.PORT || 8080

app.listen(PORT, () => { 
  console.log(`Server Started at Port ${PORT}`)
}) 

console.log(__dirname)