const express = require('express');
const { authenticate, authorize } = require('../middleware/auth');
const userController = require('../controllers/userController');

const router = express.Router();

// Routes accessible by all authenticated users
router.get('/dashboard', authenticate, userController.getDashboard);

// Routes for admins and moderators
router.put('/change-role', 
  authenticate, 
  authorize('admin', 'moderator'), 
  userController.changeUserRole
);

// Admin-only routes
router.get('/all-users', 
  authenticate, 
  authorize('admin'), 
  userController.getAllUsers
);

router.put('/toggle-status', 
  authenticate, 
  authorize('admin'), 
  userController.toggleAccountStatus
);

module.exports = router;