const userService = require('../services/userService');

exports.getUser = async (req, res) => {
  try {
    const user = await userService.getUser(req.session);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch user' });
  }
}
