import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Footer from "./components/footer/Footer"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import Sell from "./components/Sell/Sell"
import EditProduct from "./components/editproduct/EditProduct"
import Catalog from "./components/catalog/Catalog"

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
        </div>
    )
}

export default App