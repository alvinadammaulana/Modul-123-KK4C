const express = require('express')
const usercontroller = require('../controllers/users')
const router = express.Router()



router.get('/users', usercontroller.index)
router.get('/user/:id', usercontroller.show)


router.post('/user', usercontroller.store)
  
router.put('/user/:id', usercontroller.update)
  
router.delete('/user/:id', usercontroller.delete)

module.exports = router