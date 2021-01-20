import Link from 'next/link'
import Head from 'next/head'

// import Nav from '../components/Nav'
import Layout from '../components/Layout'
const index = () => {
    return (
        <Layout  mainTitle='Built with Next JS' footer={`Copyright ${new Date().getFullYear()}`}>
            <Head>
                <title>Home Page</title>
           
            </Head>
            <h1>Hello, welcome to Next JS</h1>
            <Link href="/about">
                <a >About page</a>
            </Link>    
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, aspernatur!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, aspernatur!</p>
        </Layout>
    )
}

export default index
