import Layout from '../service_frontend/components/Layout'
import { StoreProvider } from '../service_frontend/store'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    return (
        <StoreProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </StoreProvider>
    )
}

export default MyApp
