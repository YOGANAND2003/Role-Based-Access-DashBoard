const User = require('../models/User');

// Get all users (Admin only)
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, '-password');
    res.json({
      count: users.length,
      users
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error: error.message });
  }
};

// Change user role (Admin and Moderator)
exports.changeUserRole = async (req, res) => {
  try {
    const { userId, newRole } = req.body;
    
    // Prevent changing own role
    if (userId === req.user.id) {
      return res.status(400).json({ message: 'Cannot change your own role' });
    }

    // Prevent moderators from creating admins
    if (req.user.role === 'moderator' && newRole === 'admin') {
      return res.status(403).json({ message: 'Moderators cannot assign admin role' });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.role = newRole;
    await user.save();

    res.json({ message: 'User role updated successfully', user });
  } catch (error) {
    res.status(500).json({ message: 'Error changing user role', error: error.message });
  }
};

// Toggle user account status (Admin only)
exports.toggleAccountStatus = async (req, res) => {
  try {
    const { userId } = req.body;
    
    // Prevent deactivating own account
    if (userId === req.user.id) {
      return res.status(400).json({ message: 'Cannot deactivate your own account' });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.isActive = !user.isActive;
    await user.save();

    res.json({ 
      message: `User account ${user.isActive ? 'activated' : 'deactivated'} successfully`,
      user
    });
  } catch (error) {
    res.status(500).json({ message: 'Error toggling account status', error: error.message });
  }
};

// Get user dashboard (All authenticated users)
exports.getDashboard = async (req, res) => {
  try {
    const user = await User.findById(req.user.id, '-password');
    if (!user.isActive) {
      return res.status(403).json({ message: 'Your account is deactivated' });
    }

    res.json({
      message: 'Welcome to your dashboard',
      user,
      permissions: {
        canManageRoles: ['admin', 'moderator'].includes(user.role),
        canManageAccounts: user.role === 'admin',
        canViewAllUsers: user.role === 'admin'
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Error accessing dashboard', error: error.message });
  }
};