import SideshowLayout from "../layouts/SideshowLayout";

export default function MyApp({ Component, pageProps }) {
    const getLayout = Component.getLayout || defaultLayout

    return getLayout(<Component {...pageProps} />)
}

const defaultLayout = function defaultLayout(page) {
    return (
        <SideshowLayout>
            {page}
        </SideshowLayout>
    )
}
