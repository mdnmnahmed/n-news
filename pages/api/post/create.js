import { dbConnect } from "../../../service_backend/lib/dbConnect";
import { errorHandler } from "../../../service_backend/utils/errorHandler";
import { responseHandler } from "../../../service_backend/utils/responseHandler";
import { validateInputFields } from "../../../utils_global/validateInputFields";
import { getSession } from 'next-auth/react';
import PostModal from "../../../service_backend/modals/PostModal";
import slugify from "slugify";

export default async function handlerCreatePost(req, res) {
    if (req.method !== 'POST') {
        errorHandler('Invalid Request', res);
    }

    try {

        const session = await getSession({ req });
        if (!session) {
            throw new Error(`Unauthorized user, please login first.`);
        }

        const { title, topic, description } = req.body;
        validateInputFields({ title, topic, description });

        await dbConnect();

        const slug = slugify(title, {
            remove: /[*+,~./()'"!:@]/g
        });

        const newPost = new PostModal({
            ...req.body,
            postBy: session.token.id,
            slug: slug.toLocaleLowerCase()
        });
        const savedPost = await newPost.save();
        if (savedPost) {
            delete savedPost._doc.password;
            responseHandler(res, savedPost, 'Post created successfully.');
        }
    } catch (error) {
        errorHandler(res, error, error?.customMessage || 'Failed to create Post, please try again.');
    }
} 