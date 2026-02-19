import './App.css'
import {Context} from './Content/Context.jsx'
import Products from './components/Products.jsx'
import Header from './layout/Header.jsx'
import Footer from './layout/Footer.jsx'
import Cart from './components/Cart.jsx'


function App() {


    return (
        <Context>
            <Header/>
            <Products/>
            <Footer/>
        </Context>
    )
}

export default App
