const router = require('express').Router()
const control = require('../controllers/controller')
const mid = require('../middleware/jwtoken')



router.get("/", control.index)


router.post("/login", control.login)

router.post("/getData", mid.verifyToken, control.getData)


router.post("/registerGuia", mid.verifyToken, control.registerGuia)

module.exports = router