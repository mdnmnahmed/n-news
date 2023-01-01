import bcrypt from 'bcrypt'
import { dbConnect } from "../../../../service_backend/lib/dbConnect";
import UserModal from "../../../../service_backend/modals/UserModal";
import { errorHandler } from "../../../../service_backend/utils/errorHandler";
import { responseHandler } from "../../../../service_backend/utils/responseHandler";
import { validateInputFields } from "../../../../utils_global/validateInputFields";

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        errorHandler('Invalid Request', res);
    }

    try {
        const { name, email, password } = req.body;
        validateInputFields({ name, email, password });

        await dbConnect();

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new UserModal({
            ...req.body,
            password: hashedPassword
        });
        const savedUser = await user.save();
        if (savedUser) {
            delete savedUser._doc.password;
            responseHandler(res, savedUser, 'Signup Success');
        }
    } catch (error) {
        errorHandler(res, error, error?.customMessage || 'Failed to Signup, please try again.');
    }
} 