export const checkRouteProtected = ({ state, dispatch, replace }) => {
    if (state.user.authenticated) {
        console.log('redirecting: ', state.user.authenticated);
        replace('/');
        return null;
    }
    replace('/login');
    return null;
}