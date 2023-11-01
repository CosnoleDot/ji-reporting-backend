const { User } = require('../handlers');

const router = require('express').Router();

const handler = new User();

router.post('/signup', handler.signup);
router.post('/forget-password', handler.forgetPassword);
router.post('/reset-password', handler.resetPassword);
router.delete('/:id', handler.delete);
router.put('/:id', handler.update);

module.exports = router;
