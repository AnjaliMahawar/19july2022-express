//console.log('hrlooo anjali')
const { application } = require('express')
const express = require('express')
const { mdw2 } = require('./middlewares/mw1')
const { mdw1 } = require('./middlewares/mw1')
const app = express()

app.get('/', mdw1,function (req, res) {
    console.log(req.query.fulldetails)
  res.json({
                "msg":`hy ! ${req.query.fulldetails}`
           })
})
app.post('/h',mdw2,(req,res)=>{
    res.json({
        "msg":`hello `
    })

})
console.log('/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\')
app.listen(3000)