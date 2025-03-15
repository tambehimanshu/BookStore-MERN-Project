import React from "react";

function Login() {
  return (
    <>
      <div>
        <dialog id="my_modal_3" className="modal ">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h3 className="font-bold text-lg text-center ">Login</h3>
            <div className="mt-4 space-y-2 ">
              <span>Email </span>
              <input
                type="email"
                placeholder="Enter your Email"
                className="w-full  px-3 py-1 border rounded-md outline-none "
              />
            </div>

            {/* password */}
            <div className="mt-4 space-y-2 ">
              <span>Password </span>
              <input
                type="password"
                placeholder="Enter your Password"
                className="w-full px-3 py-1 border rounded-md outline-none "
              />
            </div>

            {/* button */}
            <div className="flex justify-around mt-4 "> 
            
              <button className="bg-pink-500 text-white mt-4 space-y-2 rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Login
              </button>
    <p className="pt-5">Not Registered? <span className="  underline text-blue-500 cursor-pointer"> Signup</span></p>
        </div>
                 </div>
                </dialog>
             </div>
    </>
  );
}

export default Login;
