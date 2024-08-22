const usuarios = require("../database/usuarios");
const jwt = require("../auth/webToken");

exports.login = async (req, res) => {
    try {
        const { email, senha } = req.body;
        let logado = false;
        let usuarioLogado = {};
        usuarios.forEach((usuario) => {
            if (usuario.email == email && usuario.senha == senha) {
                logado = true;
                usuarioLogado = usuario;
            }
        });
        
        if (logado) {
            const sessionData = req.session;
            req.session.isLogado = true;
            req.session.usuarioID = usuarioLogado.id;
            const token = jwt.generateToken(usuarioLogado.id);
            res.status(200).send({ sessionID: token });
        } else {
            res.status(401).send('Login inválido');
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to login' });
    }
}