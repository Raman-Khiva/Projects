import React, { useEffect, useState } from 'react'
import './loginPopup.css'
import { assets } from '../../assets/assets'
import axios from 'axios'
import  {toast} from 'react-toastify'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'

const LoginPopup = ({logOpen,setLogOpen}) => {

  const url = "http://localhost:8000";
  const {setToken} = useContext(StoreContext);
  const [login,setLogin] = useState(false);

  const [data,setData] = useState({
    name:"",
    email:"",
    password:""
  });

  const onChangeHandler = (event) =>{
    const name = event.target.name;
    const value = event.target.value;
    setData(prv=>({...prv,[name]:value}));
  }

  const onSubmitHandler = async (event)=>{
    event.preventDefault();
    
    if(login){
      
      const response = await axios.post(`${url}/api/user/login`,data);
      if(response.data.success){
        setToken(response.data.token);
        localStorage.setItem("token",response.data.token);
        setLogOpen(false);
        return toast.success("Logged In");
      }
      else return toast.error(response.data.message);

    }
    else{
      const res = await axios.post(`${url}/api/user/register`,data);
      if(res.data.success) {
        setLogOpen(false);
        return toast.success("Account Created");
      }
      else return toast.error(res.data.message);
    }

  }

  useEffect(()=>{
    console.log(data);
  },[data]);


  return (
    <div className='loginPopup_background'>
        <div className='loginPopup'>
            <div className="loginPopup-heading_container">
                <h3>{login?"Login":"Sign Up"}</h3>
                <img src={assets.cross_icon} alt="cross" className='cross' onClick={()=>setLogOpen(false)} />
            </div>

            <form onSubmit={onSubmitHandler}>
                {!login && 
                  <input name='name' onChange = {onChangeHandler} value={data.name} type="text" placeholder='Your name'/>
                }
                <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Your email'/>
                <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Password'/>
                <button type='submit'>{login?"Login":"Create account"}</button>
            </form>

            
            {login?
              <p>Don't have account?<a onClick={()=>setLogin(false)}>Create account</a></p>:
              <p>Already have an account?<a onClick={()=>setLogin(true)}>Login here</a></p>
            }

        </div> 
    </div>
  )
}

export default LoginPopup
