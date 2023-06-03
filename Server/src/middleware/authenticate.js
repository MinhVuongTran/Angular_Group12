import jwt from 'jsonwebtoken';
import userSchema from '../models/user.js';

const authenticate = async (req, res, next) => {
    try {
        let accessToken = await req.headers.authorization;
        if (!accessToken) {
            return res.status(401).json({
                message: 'Unauthorized',
            });
        }
        accessToken = accessToken.split(' ')[1];
        const { _id } = jwt.verify(accessToken, 'we17317');

        const user = await userSchema.findById(_id);
        if (!user) {
            return res.status(401).json({
                message: 'Unauthorized',
            });
        }
        if (user.role !== 1) {
            return res.status(401).json({
                message: 'Bạn không có quyền truy cập tài nguyên',
            });
        }

        req.user = user;
        next();
    } catch (err) {
        res.status(500).send({
            message: err,
        });
    }
};

export default authenticate;
