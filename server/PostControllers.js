import PostService from "./PostService.js"
import User from "./User.js";

class PostController {
    async update(req, res) {
        try {
            const updatedUser = await PostService.update(req.body);
            return res.json({updatedUser});
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    async getOne(req, res) {
        try {
            const post = await PostService.getOne(req.params.id)
            return res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new PostController;