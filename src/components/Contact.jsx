import React, { useEffect, useState } from 'react'
import axios from "../utils/axios";
//15.30
function Contact() {
  const[val,setVal]=useState("first data");
  const[data,setData]=useState("second data");
  const getUsers = () => {
    axios
      .get("/users")
      .then((res) => {
        console.log(res);
        setdata(res.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() =>{
    getUsers();
    console.log("Contact page loaded");

    return ()=>{
      console.log("Contact page unloaded");
    }
  },[val]); //useEffect use to manage recycle life which is mount.update,unmount it accept first callback function that return another callback function and then accept array .
  // first callback function gives cration/mouting of react component and return deletion/unmouting of react component and when we change state thta time we want prevent cretaion and deletion that time we use black array it stop refreshing component.
  //when we want to refresh component on change state then give usestate value in black array like :[val] when change val state react allows refresh of component 
  return (
    <div>
      <div className="bg-black text-xl font-bold p-10">
        <h1>{val}</h1>
        <button  onClick={()=>setVal("first data change")} className='my-2 bg-green-300 text-black px-2 rounded-md'>click me!</button>
      </div>
      <hr />
      <div className="bg-black text-xl font-bold p-10">
        <h1>{data}</h1>
        <button onClick={()=>setData("Second data change")} className='my-2 bg-green-300 text-black px-2 rounded-md'>click me!</button>
      </div>
      
    </div>
  )
}

export default Contact