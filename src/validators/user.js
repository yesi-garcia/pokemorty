const { check } = require("express-validator");
const validationResult = require('../helpers/handlevalidator');

const validarRegistro = [
    check('nombre')
    .exists()
    .notEmpty()
    .isLength({ min: 2, max: 100 }),
    check('edad')
    .exists()
    .notEmpty()
    .isNumeric(),
    check('password')
    .exists()
    .notEmpty()
    .isLength({ min: 3, max: 15 }),
    check('email')
    .exists()
    .notEmpty()
    .isEmail(),
    (req, res, next) => {
        return validationResult(req, res, next)
    }
]

const validarLogin = [
    check('password')
    .exists()
    .notEmpty()
    .isLength({ min: 3, max: 15 }),
    check('email')
    .exists()
    .notEmpty()
    .isEmail(),
    (req, res, next) => {
        return validationResult(req, res, next)
    }
]
module.exports = { validarRegistro, validarLogin };