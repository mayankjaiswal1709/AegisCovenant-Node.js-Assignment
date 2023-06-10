const express = require('express')
const router = express.Router();
const user = require('../controllers/userController')
const validate = require('../validatiors/user/user_validation')
const { upload } = require('../middelwear/imageStorrage')


router.post('/signupuser', upload.single('userProfilePic'), validate.registerUserValidation, user.userSignup)
router.post('/loginuser', user.userLogin)
router.post('/forgetpassword', user.forgetPassword)
router.post('/restpassword/:userId/:token', user.resetPassword)

module.exports = router

