import { useEffect } from "react";
import { useStore } from "../service_frontend/store";
import Loader from "../service_frontend/components/SharedComponent.js/Loader";
import { checkRouteProtected } from "../service_frontend/utils/checkRouteProtected";
import { useRouter } from "next/router";

export default function Home() {
    const [state, dispatch] = useStore();
    const { push, replace } = useRouter();

    useEffect(() => {
        if (!state.user.authenticating) {
            checkRouteProtected({ state, dispatch, replace });
        }
    }, [state.user.authenticated]);

    if (state.user.authenticating) {
        return (
            <Loader />
        );
    }

    return (
        <>
            <div>
                <h1>Home</h1>
            </div>


        </>
    )
}
