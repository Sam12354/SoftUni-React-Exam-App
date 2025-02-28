import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Footer from "./components/footer/Footer"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import EditProduct from "./components/edit-product/EditProduct"
import Details from "./components/details/Details"
import PersonalCatalog from "./components/personal-catalog/PersonalCatalog"
import { Routes, Route } from 'react-router-dom'
import Catalog from "./components/catalog/Catalog"
import Sell from "./components/Sell/Sell"

function App() {
    return (
        <div id="page-top">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/create" element={<Sell />} />
                <Route path="/personalCatalog" element={<PersonalCatalog />} />
                <Route path="/catalog/:itemId/edit" element={<EditProduct />} />
                <Route path="/catalog/:itemId/details" element={<Details />} />
            </Routes>
            {/* <Footer /> */}
        </div>
    )
}

export default App