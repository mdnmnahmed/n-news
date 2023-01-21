import { getSession } from "next-auth/react";
import { authConstants } from "../store/constants";

export const authenticateUser = async ({ state, dispatch, replace }) => {
    const authenticated = state.user.authenticated || false;
    // console.log('authenticated: ', authenticated);
    if (!authenticated) {
        dispatch({
            type: authConstants.LOGIN_REQUEST
        })
        const session = await getSession();
        // console.log("session: ", session);
        if (session?.token) {
            dispatch({
                type: authConstants.LOGIN_SUCCESS,
                payload: session.token
            });
        } else {
            dispatch({
                type: authConstants.LOGIN_FAILURE,
                payload: null
            });
            replace('/login');
        }
    }
}