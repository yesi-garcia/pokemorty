const bcryptjs = require('bcryptjs')

const encrypt = async(passworpPlain) => { //funcion para encryptar un texto plano
    const hash = await bcryptjs.hash(passworpPlain, 10)
    return hash
};

const compare = async(passworpPlain, hashPassword) => {
    return await bcryptjs.compare(passworpPlain, hashPassword)
};

module.exports = { encrypt, compare }