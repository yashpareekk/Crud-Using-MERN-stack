const express = require('express');
const UserModel = require('../Users');
const router = express.Router();



router.get('/', async(req, res) => {
   let data=await UserModel.find({})
    res.json(data);
});

router.get('/getUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findById({_id: id})
    .then(users => res.json(users))
    .catch(err => res.json(err));
});

router.put('/updateUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndUpdate({_id: id}, {
        name: req.body.name,
        email: req.body.email,
        age: req.body.age
    })
    .then(users => res.json(users))
    .catch(err => res.json(err));
});

router.delete('/deleteUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndDelete({_id: id})
    .then(res => res.json(res))
    .catch(err => res.json(err));
});

router.post("/createUser", (req, res) => {
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err));
});

module.exports = router;
