import React, { useEffect, useState } from "react";
import axios from "axios";

function Show() {
  const [data, setdata] = useState([]);
  const getData = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res);
        setdata(res.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(()=>{
    getData();

    return()=>{
      console.log("Contact page unloaded");
    }
  },[]);
  return (
    <div>
      <button
        onClick={getData}
        className="bg-green-300 px-5 py-2 text-lg rounded-xl mx-28 my-10"
      >
        click me
      </button>
      <div className="w-full">
        {data.length > 0 ? 
          data.map((items, index) => (
            <ul>
              <li key={index} className="text-white text-lg mx-5 mt-1">{items.title}</li>
            </ul>
          ))
         : 
          <p className=" text-3xl text-center font-bold text-white ">Loading...</p>
        }
      </div>
    </div>
  );
}

export default Show;
