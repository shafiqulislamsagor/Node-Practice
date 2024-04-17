const express = require('express')
const app = express()
const port = 20002


app.get('/', (req, res) => {
    res.send('Hi EveryOne')
})

app.get('/item',(req , res)=>{
    res.send('Item Project')
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})