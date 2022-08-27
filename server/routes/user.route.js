const express = require('express')

const router = express.Router();

const User = require('../model/user.model')

router.get('/', async (req, res) => {
    const getUser = await User.find();
    res.send(getUser)
})

router.post('/user', async (req, res) => {
   const user = new User(req.body);
   try {
    await user.save();
    res.send(user);
   } catch (error) {
    console.log(error)
   }
})

router.put('/:id', async (req, res) => {
    const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, {new:true});
    res.status(200).json(updateUser)

})

router.delete('/:id', async (req, res) => {
    const deleteUser = await User.findByIdAndRemove(req.params.id);
    res.status(200).json(deleteUser);
})
    


module.exports = router;