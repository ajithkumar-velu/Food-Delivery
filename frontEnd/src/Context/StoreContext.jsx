import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types"
import axios from "axios";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {



    const [cartItems, setCartItem] = useState({});
    const url = "http://localhost:4000"
    const [token, setToken] = useState("")
    const [card_list, setFoodList] = useState([])
    const addToCart = async (itemId) => {
        if (!cartItems[itemId]) {
            setCartItem((prev) => ({ ...prev, [itemId]: 1 }))
        }
        else {
            setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
        if (token) {
            await axios.post(url+"/api/cart/add", {itemId}, {headers:{token}})
        }
    }
    const removeFromCart = async (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
        if (token) {
            await axios.post(url+"/api/cart/remove", {itemId}, {headers: {token}})
        }
    }


    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = card_list.find((product) => product._id === item)
                totalAmount += itemInfo.price * cartItems[item];
            }
        }
        return totalAmount;
    }

    const fetchFoodList = async () =>{
        const response = await axios.get(url+"/api/equip/list")
        setFoodList(response.data.data)
    }

    const loadCartData = async (token)=>{
        const response = await axios.post(url+"/api/cart/get",{},{headers:{token}})
        setCartItem(response.data.cartData)
    }

    useEffect(() => {
        async function loadData(){
            await fetchFoodList();
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"))
                await loadCartData(localStorage.getItem("token"));
            }
        }
        loadData()
    },[])

    const contextValue = {
        card_list,
        cartItems,
        setCartItem,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken,
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
StoreContextProvider.propTypes = {
    children: PropTypes.string.isRequired, // Define category prop as required string
};

export default StoreContextProvider;