export const checkRouteProtected = ({ state, dispatch, replace, authRedirect = '/', unAuthRedirect = '/login' }) => {
    if (state.user.authenticated) {
        console.log('redirecting: ', state.user.authenticated);
        replace(authRedirect);
        return null;
    }
    replace(unAuthRedirect);
    return null;
}