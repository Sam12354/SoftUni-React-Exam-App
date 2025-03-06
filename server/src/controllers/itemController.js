import { Router } from "express";
import { itemService } from "../services/itemService.js";
import { getErrorMassage } from "../utils/errorUtils.js";
import { isAuth } from "../middlewares/authMiddleware.js";
import { checkIsLiked, checkIsNotOwner, checkIsOwner } from "../middlewares/ownerMiddleware.js";
import { getAllUsersByIds } from "../services/authService.js";

const routes = Router()

routes.get('/catalog', async (req, res) => {
    try {
        const items = await itemService.getAll().lean()
        
        res.json(items)
    } catch (err) {
        res.status(400).json({ error: getErrorMassage(err) })
    }
})

routes.get('/create', async (req, res) => {
    res.status(204).end(); 
})

routes.post('/create', async (req, res) => {
    const item = req.body 
    const userId = req.user._id
    try {
        const createdItem = await itemService.create(item, userId); 

        res.json(createdItem);
    } catch (err) {
        res.status(400).json({ error: getErrorMassage(err) });
    }
})

routes.get('/:itemId', async (req, res) => {
    //details
    const item = await itemService.getItem(req.params.itemId).lean()  
    
    const isOwner = item.owner == req.user?._id

    const isLiked = item.userList.some(userId => userId == req.user?._id)

    res.json({ item, isOwner, isLiked });

})

routes.delete('/:itemId', isAuth, checkIsOwner, async (req, res) => {
    // delete

    const itemId = req.params.itemId 
    try {
        const item = await itemService.remove(itemId)
        res.json(item)
    } catch (err) {
        res.status(400).json({ error: getErrorMassage(err) });
    }

})

// routes.get('/:itemId/edit', isAuth, checkIsOwner, async (req, res) => {
//     const itemId = req.params.itemId 
//     try {
//         const item = await itemService.getById(itemId).lean()
        
//         res.json(item)
//     } catch (err) {
//         res.status(400).json({ error: getErrorMassage(err) });
//     }
// })

routes.put('/:itemId/edit', isAuth, checkIsOwner, async (req, res) => {
    const itemId = req.params.itemId 
    const body = req.body
    try {
        const item = await itemService.edit(itemId, body)
        res.json(item)
    } catch (err) {
        res.status(400).json({ error: getErrorMassage(err) });
    }
})

routes.get('/:itemId/like', checkIsNotOwner, checkIsLiked, isAuth, async (req, res) => {
    
    const itemId = req.params.itemId 
    const userId = req.user._id 

    try {
        const updatedItem = await itemService.like(itemId, userId)
        res.json(updatedItem);
    } catch (err) {
        res.status(400).json({ error: getErrorMassage(err) });
    }
})

routes.get('/:itemId/profile', isAuth, checkIsOwner, async (req, res) => {

    try {
        const items = await itemService.getByOwner(req.user?._id).lean()
        res.render('item/profile', { items, title: 'My Profile' })
    } catch (err) {
        const error = getErrorMassage(err)
        res.render('item/create', { title: 'My Profile', error })
    }

})

export default routes