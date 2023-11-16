import React, { useState } from 'react'
import Navbar from './Navbar';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import SignUp from './Signup';
import SingleProduct from './SingleProduct';
import Cart from './Cart';



const getUserFromLS = () => {
    const foundUser = localStorage.getItem('user131');
    if (foundUser) {
        return JSON.parse(foundUser)
    }
    else return null
};

export default function AppFunction() {
    const [user, setUser] = useState(getUserFromLS)
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState({})


    const getProducts = async () => {
        const url = ''
        const options = {}
        const res = await fetch(url, options);
        const data = await res.json()
    }
    

    const logMeIn = (user) => {
        setUser(user);
        localStorage.setItem('user131', JSON.stringify(user))
    };
    const logMeOut = () => {
        setUser(null)
        localStorage.removeItem('user131')
    };

   



    return (
        <BrowserRouter>

            <Navbar user={user} logMeOut={logMeOut} />

            <Routes>
                <Route path='/' element={<Home  />} />
                <Route path='/login' element={<Login logMeIn={logMeIn}/>} />
                <Route path='/product/:productId' element={<SingleProduct />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/my-cart/:cartId' element={<Cart user={user} />}/>
            </Routes>
        </BrowserRouter>
    )

}