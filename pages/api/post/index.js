import { dbConnect } from "../../../service_backend/lib/dbConnect";
import PostModal from "../../../service_backend/modals/PostModal";
import { errorHandler } from "../../../service_backend/utils/errorHandler";
import { responseHandler } from "../../../service_backend/utils/responseHandler";

export default async function handlerGetPosts(req, res) {
    if (req.method !== 'GET') {
        errorHandler('Invalid Request', res);
    }

    try {
        await dbConnect();
        const allPosts = await PostModal.find();
        // console.log(allPosts);
        if (allPosts) {
            responseHandler(res, allPosts);
        }
    } catch (error) {
        errorHandler(res, error, error?.customMessage || 'Failed to get News data, please try again.');
    }
}