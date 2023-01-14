import { createContext, useContext, useReducer } from 'react';
import { authConstants } from './constants';

const Store = createContext();

const reducer = (state, action) => {
    console.log({ action });

    switch (action.type) {
        case authConstants.LOGIN_REQUEST: {
            return {
                ...state,
                user: {
                    ...state.user,
                    authenticating: true

                }
            }
        }

        case authConstants.LOGIN_SUCCESS: {
            return {
                ...state,
                user: {
                    ...action.payload,
                    authenticated: true,
                    authenticating: false,
                }
            }
        }

        case authConstants.LOGIN_FAILURE: {
            return {
                ...state,
                user: {
                    ...state.user,
                    authenticated: false,
                    authenticating: false,
                }
            }
        }

        default:
            return state;
    }
}

export const useStore = () => useContext(Store);

export const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, {
        user: {
            authenticated: false,
            authenticating: true,
            error: null,
        }
    });

    return (
        <Store.Provider value={[state, dispatch]}>
            {children}
        </Store.Provider>
    )
} 