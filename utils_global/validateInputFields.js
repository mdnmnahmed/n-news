export const validateInputFields = (fields) => {
    for (let key in fields) {
        if (!fields[key] || fields[key].trim() === "") {
            const error = {
                customMessage: `'${key}' field is Required, please enter '${key}'.`,
            }
            throw error;
        }
    }
}