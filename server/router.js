import Router from 'express';
import PostController from "./PostControllers.js";

const router = new Router()

router.put('/users', PostController.update)
router.get('/users/:id', PostController.getOne)


export default router;

