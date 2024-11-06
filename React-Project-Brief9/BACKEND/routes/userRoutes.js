const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/login',userController.login);   //  Post /api/users/login
router.post('/register', userController.createUser); //    POST /api/users/
router.get('/', userController.getUsers);    //    GET /api/users/
router.get('/:id', userController.getUserById); // GET   /api/users/32436886
router.put('/:id', userController.updateUser); //  PUT /api/users/32436886
router.delete('/:id', userController.deleteUser);//  DELETE /api/users/32436886

module.exports = router; 