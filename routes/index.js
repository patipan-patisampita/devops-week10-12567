const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    return res.render('index')
})

router.get('/vision', (req, res) => {
    return res.render('vision')
})

module.exports = router