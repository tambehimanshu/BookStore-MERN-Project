import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"

function Signup() {
  const {
      register,
      handleSubmit,
     
      formState: { errors },
    } = useForm()
  
    const onSubmit = (data) => console.log(data)
  return (
   <>
   <div className=" flex h-screen  items-center justify-center ">
   <div className=" w-[600px]" >
          <div  className='modal-box'>
            <form   onSubmit={handleSubmit(onSubmit)}  method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:text-slate-900">
                ✕
              </Link>
         
            <h3 className="font-bold text-lg text-center dark: text-slate-900">Signup</h3>
            {/* name */}
            <div className="mt-4 space-y-2 ">
              <span className="dark: text-slate-900">Name </span>
              <input
                type="text"
                placeholder="Enter your Name"
                className="w-full px-3 py-1 border rounded-md outline-none "
                {...register("name", { required: true })}
                
                />
                <br />
                  {errors.name && <span  className="text-sm text-red-600" >This field is required*</span>}
            </div>
            <div className="mt-4 space-y-2 ">
              <span className="dark: text-slate-900 ">Email </span>
              <input
                type="email"
                placeholder="Enter your Email"
                className="w-full  px-3 py-1 border rounded-md outline-none "
                {...register("email", { required: true })}              />
                <br />
                  {errors.email && <span className="text-sm text-red-600"> This field is required*</span>}
              
            </div>

            {/* password */}
            <div className="mt-4 space-y-2 ">
              <span className="dark: text-slate-900">Password </span>
              <input
                type="password"
                placeholder="Enter your Password"
                className="w-full px-3 py-1 border rounded-md outline-none "
                {...register("password", { required: true })}
                
                />
                <br />
                  {errors.password && <span  className="text-sm text-red-600" >This field is required*</span>}
            </div>
          

            {/* button */}
            <div className="flex justify-around mt-4 ">
              <button className="bg-pink-500 text-white mt-4 space-y-2 rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Login
              </button>
              <p className="pt-5 dark: text-slate-900">
                Have Account?{" "}
            
                <button  className="  underline text-blue-500 cursor-pointer bg-white"
                onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                }


                >
                  
                  login
                </button>
                <Login/>
              </p>
            </div>
            </form>
          </div>
        </div>
   </div>
   </>
  )
}

export default Signup