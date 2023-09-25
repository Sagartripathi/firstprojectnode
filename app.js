const app = require("express")()

// alternative ways 

app.get("/",(req,res)=>{
    res.send({
        message:"It home page....."
            })
        })
app.listen(4100,(req, res)=>{
    console.log(" its running on port 4100")
})
                   