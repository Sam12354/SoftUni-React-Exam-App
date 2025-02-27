import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Footer from "./components/footer/Footer"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import Sell from "./components/sell/Sell"
import EditProduct from "./components/editproduct/EditProduct"
import Catalog from "./components/catalog/Catalog"
import Details from "./components/details/Details"

function App() {
    return (
        <div id="page-top">
            <Header />
            <Home />
            <Footer />
            <Login />
            <Register />
            <Sell />
            <EditProduct />
            <Catalog />
            <Details />
        </div>
    )
}

export default App