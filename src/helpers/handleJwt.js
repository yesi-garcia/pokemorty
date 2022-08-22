const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

/**
 * se pasa el objeto del usuario
 * @param {*} user 
 */
const tokenSing = async(user) => { // firmar token
    const sign = await jwt.sign({ //payload
            id: user.id,
            role: user.role
        },
        JWT_SECRET, {
            expiresIn: '3h' //tiempo de expiracion del jwt
        }
    );
    return sign; // nos retorna token jwt
};

/**
 * Se debe pasar el token de session jwt
 * @param {*} tokenjwt 
 */
const verifyToken = async(tokenjwt) => { // verificar token
    try {
        return jwt.verify(tokenJwt, JWT_SECRET)
    } catch (e) {
        return null
    }
}

module.exports = { tokenSing, verifyToken }