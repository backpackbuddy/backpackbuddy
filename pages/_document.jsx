import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="in-ID" style={{ fontSize: '.9em' }}>
                <Head>
                    <script async src="https://www.googletagmanager.com/gtag/js?id=G-PNS3FH534Q"></script>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){ dataLayer.push(arguments); }
                            gtag('js', new Date());

                            gtag('config', 'G-PNS3FH534Q');
                        `
                        }}
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>

            </Html>
        )
    }
}

export default MyDocument
