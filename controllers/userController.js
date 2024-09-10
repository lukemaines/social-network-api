const { User } = require('../models');

const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json(err);
    }
};

const getUserById = async (req, res) => {
    try {
        const user = await User.findbyId(req.params.id).populate('thoughts').populate('friends');
        if (!user) {
            return res.status(404).json({ message: 'No user found with that id!' });
        }
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
};

const createUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.status(201).json(newUser);
        } catch (err) {
            res.status(500).json(err);
        
    }
};

const updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: 'No user found.'});
        }
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(500).json(err);
    }
};

const deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            return res.status(404).json({ message: 'No user found.' });
        }
        res.status(200).json({ message: 'User deleted.' });
    } catch (err) {
        res.status(500).json(err);
    }
};

module.exports = {
    getUsers, 
    getUserById,
    createUser,
    updateUser,
    deleteUser,
};