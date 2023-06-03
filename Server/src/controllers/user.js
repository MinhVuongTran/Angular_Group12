import Joi from 'joi';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import userSchema from '../models/user.js';

const userSignUpValidate = Joi.object({
    fullName: Joi.string().required(),
    phoneNumber: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required().messages({
        'string.min': 'Mật khẩu tối thiểu 6 ký tự',
        'string.empty': 'Trường dữ liệu bắt buộc',
    }),
    confirmPassword: Joi.ref('password'),
});

const userSignInValidate = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
});

const salt = bcrypt.genSaltSync(10);

const signUp = async (req, res) => {
    try {
        const body = req.body;
        const { error } = userSignUpValidate.validate(body);
        if (error) {
            res.status(400).send({
                message: error.message,
            });
        } else {
            const hash = bcrypt.hashSync(body.password, salt);
            const data = await userSchema.create({ ...body, password: hash });
            res.send({
                message: 'Đăng kí thành công',
                data: data,
            });
        }
    } catch (err) {
        res.status(500).send({
            message: err,
        });
    }
};

const signIn = async (req, res) => {
    try {
        const body = req.body;
        const { error } = userSignInValidate.validate(body);
        // Validate
        if (error) {
            return res.status(400).send({
                message: error.message,
            });
            // res.end()
        }
        const user = await userSchema.findOne({ email: body.email });
        if (!user) {
            return res.status(400).send({
                message: 'Tên đăng nhập hoặc mật khẩu sai',
            });
        }
        const isValidate = bcrypt.compareSync(body.password, user.password);
        if (!isValidate) {
            return res.status(400).send({
                message: 'Tên đăng nhập hoặc mật khẩu sai',
            });
        }
        const accessToken = jwt.sign({ _id: user._id }, 'we17317', {
            expiresIn: '10m',
        });
        res.send({
            message: 'Đăng nhập thành công',
            data: {
                user,
                accessToken,
            },
        });
    } catch (err) {
        res.status(500).send({
            message: err,
        });
    }
};

export { signUp, signIn };
