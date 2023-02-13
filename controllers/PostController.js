import { addPostValidator } from "../utils/validations.js";
import Post from "../models/Post.js";
import Category from "../models/Category.js";
import Alert from "../utils/Alert.js";
import PostCategory from "../models/PostCategory.js";

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

    async getPost(req, res) {
        const alert = new Alert(req, res);
        try {
            const post = await Post.findOne({
                where: { id: req.params.id },
                include: [{ model: Category, as: "PostCategory" }],
            });
            res.status(200).json({ post });
        } catch (error) {
            alert.danger(error.message, 500);
        }
    }

    async createPost(req, res) {
        const { title, content, categories, userId, studentId } = req.body;
        const alert = new Alert(req, res);
        const { error } = addPostValidator(req.body);

        if (error) {
            return alert.danger(error.details[0].message, 400);
        }
        try {
            const newPost = await Post.create({
                title,
                content,
                studentId: studentId ?? null,
                userId: userId ?? null,
            });

            categories.map(async (category) => {
                const newCat = await Category.findOrCreate({
                    where: { title: category.title },
                });
                console.log({ newPost, newCat });
                await PostCategory.create({
                    postId: newPost.id,
                    categoryId: newCat[0].id,
                });
            });

            return alert.success("Post created with success", 201);
        } catch (error) {
            alert.danger(error.message, 500);
        }
    }
}
