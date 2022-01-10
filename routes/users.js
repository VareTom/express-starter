const express = require('express');
const router = express.Router();

const usersControllers = require('../controllers/users-controllers');

router.get('/',usersControllers.retrieveAll);

router.post('/create',usersControllers.create);

module.exports = router;
