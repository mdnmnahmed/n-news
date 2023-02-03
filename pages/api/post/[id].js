import { dbConnect } from "../../../service_backend/lib/dbConnect";
import PostModal from "../../../service_backend/modals/PostModal";
import { errorHandler } from "../../../service_backend/utils/errorHandler";
import { responseHandler } from "../../../service_backend/utils/responseHandler";

export default async function handlerGetSpecificPost(req, res) {
    if (req.method !== 'GET') {
        errorHandler('Invalid Request', res);
    }

    try {
        const { id } = req.query;
        await dbConnect();
        const specificPost = await PostModal
            .findById(id)
            .populate('postBy', '_id name')
            .exec();

        if (specificPost) {
            responseHandler(res, specificPost, 'Post data fetched.');
        }
    } catch (error) {
        errorHandler(res, error, error?.customMessage || 'Post not Found');
    }
}