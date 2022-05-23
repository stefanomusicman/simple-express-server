const express = require('express');

const friendsController = require('../controllers/friends.controller'); //Import controller module

const friendsRouter = express.Router();

friendsRouter.post('/', friendsController.postFriend);
friendsRouter.get('/', friendsController.getFriends);
friendsRouter.get('/:friendId', friendsController.getOneFriend);

module.exports = friendsRouter;