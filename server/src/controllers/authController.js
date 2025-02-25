import { Router } from 'express';
import authService from '../services/authService.js';
import { AUTH_COOKIE_NAME } from '../constants.js';
import { getErrorMassage } from '../utils/errorUtils.js';
import { isAuth, isGuest } from '../middlewares/authMiddleware.js';

const authController = Router();

authController.get('/register', isGuest, (req, res) => {
    res.render('auth/register', { title: 'Register Page' })
})

authController.post('/register', isGuest, async (req, res) => {

    const { fullName, username, password, rePass } = req.body;

    try {
        const token = await authService.register(fullName, username, password, rePass)
        res.cookie(AUTH_COOKIE_NAME, token, { httpOnly: true })
        res.redirect('/')
    } catch (err) {
        const error = getErrorMassage(err)
        res.render('auth/register', { title: 'Register Page', fullName, username, error })
    }

})

authController.get('/login', isGuest, (req, res) => {
    res.render('auth/login', { title: 'Login Page' })
})

authController.post('/login', isGuest, async (req, res) => {

    const { username, password } = req.body;

    try {
        const token = await authService.login(username, password) 
        res.cookie(AUTH_COOKIE_NAME, token, { httpOnly: true })
        res.redirect('/')
    } catch (err) {
        const error = getErrorMassage(err)
        res.render('auth/login', { title: 'Login Page', username, error })
    }

})

authController.get('/logout', isAuth, (req, res) => {
    res.clearCookie(AUTH_COOKIE_NAME)
    res.redirect('/')
})

export default authController