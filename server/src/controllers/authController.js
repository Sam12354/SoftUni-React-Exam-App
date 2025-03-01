import { Router } from 'express';
import authService from '../services/authService.js';
import { AUTH_COOKIE_NAME } from '../constants.js';
import { getErrorMassage } from '../utils/errorUtils.js';
import { isAuth, isGuest } from '../middlewares/authMiddleware.js';

const authController = Router();

authController.post('/register', isGuest, async (req, res) => {

    const { email, password, rePass } = req.body;

    try {
        const token = await authService.register(email, password, rePass)
        res.cookie(AUTH_COOKIE_NAME, token, { httpOnly: true })
        res.json({ token })
    } catch (err) {
        const error = getErrorMassage(err)
        res.status(400).json({ error });
    }

})

// authController.get('/login', isGuest, (req, res) => {
//     res.json({ message: 'Login endpoint reached' });
// })

authController.post('/login', isGuest, async (req, res) => {

    const { email, password } = req.body;

    try {
        const token = await authService.login(email, password) 
        res.cookie(AUTH_COOKIE_NAME, token, { httpOnly: true })
        res.json({ token });
    } catch (err) {
        const error = getErrorMassage(err)
        res.status(400).json({ error });
    }

})

authController.get('/logout', isAuth, (req, res) => {
    res.clearCookie(AUTH_COOKIE_NAME)
})

export default authController