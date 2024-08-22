const authService = require('../services/authService');

exports.login = async (req, res) => {
    authService.login(req, res);
}