const { celebrate, Joi } = require('celebrate');
const router = require('express').Router();
const auth = require('../middlewares/auth');

const {
  getUsers, getUser, updatetUser, updatetAvatar,
} = require('../controllers/user');

router.get('/', auth, getUsers);
router.get('/:id', auth, getUser);

router.patch('/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    about: Joi.string().required().min(2).max(30),
  }),
}), auth, updatetUser);
router.patch('/me/avatar', auth, updatetAvatar);

module.exports = router;
