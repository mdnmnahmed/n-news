import { dbConnect } from "../../../service_backend/lib/dbConnect";
import PostModal from "../../../service_backend/modals/PostModal";
import { errorHandler } from "../../../service_backend/utils/errorHandler";
import { responseHandler } from "../../../service_backend/utils/responseHandler";


export default async function handlerGetProfileData(req, res) {
    if (req.method !== 'POST') {
        errorHandler('Invalid Request', res);
    }

    try {
        const { id } = req.body;
        await dbConnect();
        const userPosts = await PostModal
            .find({ user: id })
            .exec();

        if (userPosts) {
            responseHandler(res, userPosts, 'Post data fetched.');
        }
    } catch (error) {
        errorHandler(res, error, error?.customMessage || 'Post not Found');
    }
}