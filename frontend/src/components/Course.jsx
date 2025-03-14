import React from "react";
import list from "../../public/list.json";
import Cards from "./Cards";
import {Link } from 'react-router-dom'
function Course() {

  console.log(list);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div className="mt-28  items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here! :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis iusto officia adipisci sit molestiae deleniti ratione numquam id quaerat, corporis, dicta nobis modi, repudiandae ex asperiores. Ut harum dignissimos incidunt, nam modi atque distinctio autem animi tempora quibusdam quae, molestiae minus repellendus rem at voluptas sint aliquam mollitia fuga unde.
          </p>

        <Link to='/'>
        <button className="mt-6  bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-700 duration-300">
            Back
          </button>
          </Link>
         
        </div>
        <div className="mt-12  grid grid-cols-1 md:grid-cols-4">
          {
            list.map((item)=>(
              <Cards key={item.id} item={item}/>
            ))
          }
        </div>
      </div>
    </>
  );
}

export default Course;
