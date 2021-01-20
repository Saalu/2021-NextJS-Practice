import Document, { Html, Head, Main, NextScript } from 'next/document'


 class MyDocument extends Document {
    render() {
        return (
            
            <Html lang='en'>
                <Head>
                <meta charSet='UTF-8' />
                <meta name='description' content='My SEO with React App and Nex JS' />
                <meta name='keywords' content='next react seo' />
                <meta name='author' content='Saalu Issaka' />
                    {/* <link rel="stylesheet" href="mdb.min.css"/> */}
                    <link href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.1.0/mdb.min.css" rel="stylesheet"/>
                    <link rel="stylesheet" href="/static/styles.css"/>
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
