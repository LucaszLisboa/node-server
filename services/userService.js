const usuarios = require('../database/usuarios');

exports.findUserByID = (userID) => {
  return usuarios.find((usuario) => usuario.id == userID);
}

exports.getUser = async (session) => {
  try {
    const sessionData = session;
    const user = this.findUserByID(sessionData.usuarioID);
    return user;
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch user' });
  }
}