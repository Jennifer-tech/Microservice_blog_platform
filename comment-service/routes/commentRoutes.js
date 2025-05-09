const express = require('express');
const router = express.Router();
const { addComment, getCommentsByPost } = require('../controllers/commentController');
const auth = require('../middleware/authMiddleware');

router.post('/', auth, addComment);
router.get('/:postId', getCommentsByPost);

module.exports = router;