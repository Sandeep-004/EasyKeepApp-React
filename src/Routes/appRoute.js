const express = require("express")
const router = express.Router()
const App = require('../modals/appModel')

router.post("/React-EasyKeepApp-cloneGooglekeep", (req, res) => {
    const newApp = new App({
    title: req.body.title,
    content: req.body.content,
    date : req.body.date
 })

newApp.save()
.then(data => {
    res.json(data)
})
    .catch(error => {
         res.json(error)
    
    }) 
})

module.exports = router;