const express = require('express');

const router = express.Router();

const {
    getAllUsers,
    createNewUser,
    updateUserById,
    deleteUserById } = require('../controller/controller')



router.get('/users',getAllUsers);

router.post('/user',createNewUser);

router.patch('/user/:id',updateUserById);

router.delete('/user/:id',deleteUserById);

module.exports = router;