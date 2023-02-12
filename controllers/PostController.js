import { addPostValidator } from "../utils/validations.js";
import Post from "../models/Post.js";
import Alert from "../utils/Alert.js";

export default class PostController {
    async getAllPosts(req, res) {
        const alert = new Alert(req, res);
        try {
            const posts = await Post.findAll({});
            return res.status(200).json({ posts });
        } catch (error) {
            alert.danger("internal error", 500);
        }
    }
}
