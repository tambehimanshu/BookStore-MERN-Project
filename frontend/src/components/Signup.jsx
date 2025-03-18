import React from 'react'
import { Link, replace, useLocation, useNavigate } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"
import axios from "axios"
import toast from 'react-hot-toast'

function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/'
  const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm()
  
    const onSubmit = async (data) => {
      const userInfo = {
        fullname: data.fullname,
        email: data.email,
        password: data.password,
      };

      try {
        const res = await axios.post("http://localhost:8000/user/signup", userInfo);
        console.log(res.data);
        toast.success('Signup Successfully');
        navigate(from ,{replace:true});
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      } catch (error) {
        console.log(error);
        toast.error('Error: ' + (error.response?.data?.message || 'Something went wrong'));
      }
    }

  return (
   <>
   <div className="flex h-screen items-center justify-center">
     <div className="w-[600px]">
       <div className='modal-box'>
         <form onSubmit={handleSubmit(onSubmit)}>  {/* ✅ Removed method="dialog" */}
           <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:text-slate-900">
             ✕
           </Link>
         
           <h3 className="font-bold text-lg text-center dark:text-slate-900">Signup</h3>

           {/* Name Field */}
           <div className="mt-4 space-y-2">
             <span className="dark:text-slate-900">Name</span>
             <input
               type="text"
               placeholder="Enter your FullName"
               className="w-full px-3 py-1 border rounded-md outline-none"
               {...register("fullname", { required: true })}
             />
             {errors.fullname && <span className="text-sm text-red-600">This field is required*</span>}
           </div>

           {/* Email Field */}
           <div className="mt-4 space-y-2">
             <span className="dark:text-slate-900">Email</span>
             <input
               type="email"
               placeholder="Enter your Email"
               className="w-full px-3 py-1 border rounded-md outline-none"
               {...register("email", { required: true })}
             />
             {errors.email && <span className="text-sm text-red-600">This field is required*</span>}
           </div>

           {/* Password Field */}
           <div className="mt-4 space-y-2">
             <span className="dark:text-slate-900">Password</span>
             <input
               type="password"
               placeholder="Enter your Password"
               className="w-full px-3 py-1 border rounded-md outline-none"
               {...register("password", { required: true })}
             />
             {errors.password && <span className="text-sm text-red-600">This field is required*</span>}
           </div>
          
           {/* Signup Button */}
           <div className="flex justify-around mt-4">
             <button className="bg-pink-500 text-white mt-4 rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
               Signup
             </button>
           </div>
         </form>

         {/* ✅ Login Modal is moved OUTSIDE the form */}
         <div className="pt-5 dark:text-slate-900 text-center">
           <p>Have an account?{" "}
             <button 
               className="underline text-blue-500 cursor-pointer bg-white"
               onClick={() => document.getElementById("my_modal_3").showModal()}
             >
               Login
             </button>
           </p>
         </div>
       </div>
     </div>
   </div>

   {/* ✅ Login Modal (Outside Form) */}
   <dialog id="my_modal_3" className="modal">
     <div className="modal-box">
       <Login />
     </div>
   </dialog>
   </>
  )
}

export default Signup
