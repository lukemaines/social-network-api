const router = require('express').Router();
const {
    getThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    updateThought,
    addReaction,
    deleteReaction,
} = require('../../controllers/thoughtController');

router.get('/', getThoughts);

router.get('/:id', getThoughtById);

router.post('/', createThought);

router.put('/:id', updateThought);

router.delete('/:id', deleteThought);

router.post('/:thoughtId/reactions', addReaction);

router.delete('/:thoughtId/reactions/:reactionId', deleteReaction);

module.exports = router;
