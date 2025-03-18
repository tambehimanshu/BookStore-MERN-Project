import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast'

function Logout() {
    const [authUser,setAuthUser]=useAuth()

    const handlelogout= ()=>{
try {
    setAuthUser({
        ...authUser,
        user:null
    })
    localStorage.removeItem("Users");
    toast.success("loggedOUT Successfully")
   
    

    setTimeout(()=>{
        window.location.reload();

      
     
    
     
    },3000)
 
} catch (error) {
toast.error("error"+error);
    setTimeout(()=>{},1000)
}
    }
  return (
    <div>
        <button className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer' 
        onClick={handlelogout}>logout</button>
    </div>
  )
}

export default Logout