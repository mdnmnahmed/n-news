import Layout from '../service_frontend/components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp
