import Link from 'next/link'
import Layout from './Layout'



const Nav = () => {
    return (
        <div className='my-nav'>
            <img src="/static/logo2.png" alt="logo" height='70'/>            
            <Link href="/">
                <a >Home </a>
            </Link>
            <Link href="/about">
                <a style={{marginLeft:'10px'}}>About </a>
            </Link>

            <style jsx> {`
                {
                    a, img {
                        padding: 20px
                    }
                }
            `}</style>
        </div>
    )
}

export default Nav
