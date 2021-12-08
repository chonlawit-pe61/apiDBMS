const express = require('express');
const router = express.Router();
const controllerGetUser = require('../controller/get.controller');
const facebookLogin = require('../controller/login.controller');
const vertify = require('../controller/vertify');
const createUser = require('../controller/post.controller');
const updateUser = require('../controller/put.controller');
const deleteUser = require('../controller/delete.controller');
//facebook login
router.post('/signin/facebook',facebookLogin.loginFacebook);
router.get('/vertify',vertify.checkVertify);

//crud
// router.get('/', controllerGetUser.getData);
router.route('/').get(async (req, res) => {
    const users = await userModel.find();
    res.json(users);
});
router.post('/create',createUser.PostData);
router.put('/update/:id',updateUser.updateData);
router.delete('/delete/:id',deleteUser.deleteUser);


module.exports = router;


