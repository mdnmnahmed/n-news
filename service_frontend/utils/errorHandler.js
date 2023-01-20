import { toast } from "react-toastify";

export default function errorHandler(error, showToast = true) {
    console.log('error ', error);
    const errorMessage = error?.message || error?.customMessage;
    showToast && toast.error(errorMessage);
}