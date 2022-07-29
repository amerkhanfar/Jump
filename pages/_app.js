import '../styles/globals.css'
import Navbar from '../components/Navbar'
import About from '../components/About'

function MyApp({ Component, pageProps }) {

  return (<div><Navbar /> <Component {...pageProps} /></div>)
}

export default MyApp
