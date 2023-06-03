import express from 'express';
import { signIn, signUp } from '../controllers/user.js';
import authenticate from '../middleware/authenticate.js';

const userRouter = express.Router();

userRouter.post('/register', signUp);
userRouter.post('/login', signIn);
userRouter.get('/isAdmin', authenticate, async (req, res) => {
    res.send({
        user: req.user,
        message: 'Allow',
    });
});

export default userRouter;
