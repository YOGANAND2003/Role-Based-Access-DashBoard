const express = require('express');
const { authenticate, authorize } = require('../middleware/auth');

const router = express.Router();

// Protected routes with different role requirements
router.get('/user-content', 
  authenticate, 
  authorize('user', 'moderator', 'admin'),
  (req, res) => {
    res.json({ message: 'User content accessed successfully' });
  }
);

router.get('/moderator-content', 
  authenticate, 
  authorize('moderator', 'admin'),
  (req, res) => {
    res.json({ message: 'Moderator content accessed successfully' });
  }
);

router.get('/admin-content', 
  authenticate, 
  authorize('admin'),
  (req, res) => {
    res.json({ message: 'Admin content accessed successfully' });
  }
);

module.exports = router;