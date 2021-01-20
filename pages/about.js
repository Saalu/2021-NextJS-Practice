import Link from 'next/link'
import Layout from '../components/Layout'
import Nav from '../components/Nav'

const myStyle = {color:"orange", borderLeft:"5px solid gray", padding:"2px"}


const about = () => (
    <Layout  mainTitles='My about page with Next JS' footer={`Copyright ${new Date().getFullYear()}`}>

        <h2>About page</h2>
            <p>I am Saalu Issaka. I love coding and I look
        forward to developing a career in Web development.
         
                 </p>
        <div className="form-group">
        <input type="text" placeholder='Search more..'/>
         <button className='btn btn-primary'>Search</button>
        </div>
        <Link href="/">
    <a className='btn btn-warning' >Go to Home page</a>  
        
        </Link>

        <style jsx> {`
                {
                    p {
                       color:indigo;
                       font-size: 20px
                    }
                }
            `}</style>
        
    </Layout>
    )


export default about
