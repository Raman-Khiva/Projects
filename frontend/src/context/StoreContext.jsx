// StoreContext.jsx
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//import { food_list } from "../assets/assets";
// import PropTypes from "prop-types";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const url = "http://localhost:8000";
  const [cartItems, setCartItems] = useState({});
  const [token , setToken] = useState("");
  const [food_list,setFoodList] = useState([]);
  const [orderData,SetOrderData] = useState([]);

  const navigate = useNavigate();

  const [address, setAddress] = useState({
    first_name:"",
    last_name : "",
    email : "",
    street: "",
    city : "",
    state : "",
    zip_code : "",
    country : "",
    phone : ""
  });

  const [cartData, setCartData] = useState({});


  const addToCart = async (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    if(token){
      await axios.post(`${url}/api/cart/add`,{itemId},{headers:{token}});
    }
  };

  const placeOrder = async () =>{
    
    // console.log("orderDetails :", orderDetails);
    try {
      
      const orderDetails = {
        items : cartItems,
        amount : getTotalCartAmount(),
        address : address
      };

      const res = await axios.post(`${url}/api/order/place`,orderDetails,{headers:{token}});
      console.log(res.data.message);
      navigate('/orders');
      
    } catch (error) {
      console.log("order failed", error);
    }


  }






  const getTotalItems = (orderObject) =>{
      const items = orderObject.items[0];
      var totalItems = 0;
      for( const item in items){
        totalItems+= items[item];
      }

       return totalItems;

  }





  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const fetchCart = async () =>{
     setCartData({});
      const res = await axios.get(`${url}/api/cart/get`,{headers:{token}});
      setCartData(res.data.cartData);
      console.log(cartData);
  }


  const fetchOrderData = async ()=>{
    console.log("fetchData called");
    if(token){
      const res = await axios.get(`${url}/api/order`,{headers:{token}});
      SetOrderData(res.data.orderData);

    }
     
  }

  

  const fetchFoodList = async () =>{
    const res = await axios.get(`${url}/api/food/list`);
    setFoodList(res.data.data);
  }

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const getTotalCartAmount = () => {
    let totalcartData = 0;
    if(cartData){
      for (const item in cartData) {
        if (cartData[item] > 0) {
          let itemInfo = food_list.find((product) => product._id === item);
          totalcartData += itemInfo.price * cartData[item];
        }
      }

    }

    return totalcartData;
  };


  useEffect(()=>{
    async function loadData() {
      await fetchFoodList();
      console.log("fetchfood called")
      if(localStorage.getItem("token")){
        setToken(localStorage.getItem("token"));
        
      }
    }
    
    loadData();

  },[]);

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    token,
    setToken,
    setAddress,
    address,
    placeOrder,
    fetchOrderData,
    orderData,
    cartData,
    fetchCart,
    getTotalItems
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

// StoreContextProvider.propTypes = {
//   children: PropTypes.node.isRequired,
// };

export default StoreContextProvider; // Default export
