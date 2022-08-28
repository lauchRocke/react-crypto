const express = require('express')

const router = express.Router(),
{
  signup,
  signin
} = require("../controllers/auth.controller.js");

const User = require('../models/user.model')
const verifyToken = require('../middlewares/authJWT')
router.get('/', async (req, res) => {
    const getUser = await User.find();
    res.send(getUser)
})
router.get("/hiddencontent", verifyToken, function (req, res) {
    if (!user) {
      res.status(403)
        .send({
          message: "Invalid JWT token"
        });
    }
    if (req.user == "admin") {
      res.status(200)
        .send({
          message: "Congratulations! but there is no hidden content"
        });
    } else {
      res.status(403)
        .send({
          message: "Unauthorised access"
        });
    }
  });
router.post('/user', signup, async (req, res) => {
   const user = new User(req.body);
   try {
    await user.save();
    res.send(user);
   } catch (error) {
    console.log(error)
   }
})
router.post("/register", signup, function (req, res) {

});

router.post("/login", signin, function (req, res) {

});
router.put('/user/:id', async (req, res) => {
    const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, {new:true});
    res.status(200).json(updateUser)

})

router.delete('/user/:id', async (req, res) => {
    const deleteUser = await User.findByIdAndRemove(req.params.id);
    res.status(200).json(deleteUser);
})
    


module.exports = router;