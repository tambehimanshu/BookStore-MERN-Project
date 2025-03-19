import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form" 
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  const {
    register,
    handleSubmit,
   
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    const userInfo ={
     
      email:data.email,
      password:data.password,
    };
     await axios.post("http://localhost:8000/user/login",userInfo)
    .then((res)=>{
      console.log(res.data)
      if (res.data) {
        toast.success("Loggedin Successfully"); 
        document.getElementById("my_modal_3").close(); // to closed the login promt
        setTimeout(() => {
          window.location.reload();   // for reload
          localStorage.setItem("Users", JSON.stringify(res.data.user));   //for storing data locally
        }, 1000);
       
        
      }
    
    }).catch((error)=>{
      if(error.response){
        console.log(error)
       
        toast.error('This is an error!'+error.response.data.message);
        setTimeout(()=>{

        },3000)
      }
      
    });
  }
  return (
    <>
      <div>
        <dialog id="my_modal_3" className="modal  ">
          <div className="modal-box dark:bg-slate-900">
            <form  onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2  dark:text-slate-100 dark:hover:bg-slate-600 border-none" onClick={()=>document.getElementById("my_modal_3").close()}>
                ✕
              </Link>
            
            <h3 className="font-bold text-lg text-center dark: text-slate-900 dark:text-slate-100">Login</h3>
            <div className="mt-4 space-y-2 ">
              <span className="dark: text-slate-900 dark:text-slate-100">Email </span>
              <input
                type="email"
                placeholder="Enter your Email"
                className="w-full  px-3 py-1 border rounded-md outline-none dark:text-slate-100 dark:bg-slate-900"
                {...register("email", { required: true })}              />
                <br />
                  {errors.email && <span className="text-sm text-red-600"> This field is required*</span>}
            </div>

            {/* password */}
            <div className="mt-4 space-y-2 ">
              <span className=" dark:text-slate-100">Password </span>
              <input
              
                type="password"
                placeholder="Enter your Password"
                className="w-full px-3 py-1 border rounded-md outline-none dark:text-slate-100 dark:bg-slate-900"
                {...register("password", { required: true })}
                
              />
              <br />
                {errors.password && <span  className="text-sm text-red-600" >This field is required*</span>}
            </div>

            {/* button */}
            <div className="flex justify-around mt-4 ">
              <button   className="bg-pink-500 text-white mt-4 space-y-2 rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Login
              </button>
              <p className="pt-5 dark:text-slate-100">
                Not Registered?{" "}
            
                <Link to='/signup'  className="  underline text-blue-500 cursor-pointer ">
                  
                  Signup
                </Link>
              </p>
            </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Login;
