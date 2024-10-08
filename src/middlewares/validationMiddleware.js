import { body, validationResult} from 'express-validator';

const validationMiddleware = {

    validationSignUp: () => [
        body ('userName')
            .trim().notEmpty().withMessage('Este campo es obligatorio')
            .isString().withMessage('Introduccir un valor correcto (Solo letras)')
            .isLength({ min:3 , max:30 }).withMessage('Introduccir un minimo de 3 caracteres y un maximo de 30'),
        body ('email')
            .trim().notEmpty().withMessage('Este campo es obligatorio')
            .isEmail().withMessage('Introducir un Email valido')
            .normalizeEmail(),
        body ('password')
            .trim().notEmpty().withMessage('Este campo es obligatorio')
            .isLength( { min:6 , max: 30 }).withMessage('La contraseña debe contener entre 6 y 30 caracteres')
            .matches(/\d/).withMessage('La contraseña debe contener al menos un numero')
            .matches(/[a-z]/).withMessage('La contraseña debe contener al menos una letra'),
        body ('clientCode')
            .trim().notEmpty().withMessage('Necesitas un codigo de cliente para registrarte')
            .isLength({ max:5 }).withMessage('Formato de codigo invalido')
            .matches(/\d/).withMessage('Formato de codigo invalido')
            .matches(/[A-Z]/).withMessage('Formato de codigo invalido'),

            (req, res, next) => {

                const errors = validationResult(req);
                
                if (!errors.isEmpty()) {
                    return res.status(400).json({ errors: errors.array() });
                }
                
                next();
            }
        ]
}

export default validationMiddleware;