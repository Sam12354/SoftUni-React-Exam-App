import { Router } from 'express';
import { itemService } from '../services/itemService.js';
import { getErrorMassage } from '../utils/errorUtils.js';

const homeController = Router()

homeController.get('/', async (req, res) => {
    try {     
        res.render('home', { items, title: 'Home Page' })
    } catch (err) {
        const error = getErrorMassage(err)
        res.render('home', { title: 'Home Page', error })
    }
})

export default homeController