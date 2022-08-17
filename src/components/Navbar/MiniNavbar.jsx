import React,{useState} from "react";

import {Link, useParams} from "react-router-dom";


function MiniNavbar() {
    const [types]=useState([
        {
            id:"All",
            type:"All"
        },
        {
            id:"Women",
            type:"Women"
        },
        {
            id:"Men",
            type:"Men"
        },
        {
            id:"Shoes",
            type:"Shoes"
        },
        {
            id:"Accessory",
            type:"Accessory"
        }
    ]

    )
    const {type}=useParams()
  return (
    <>
      <div className="flex sm:my-4 flex-col lg:flex-row lg:w-100 lg:mx-16 mx-6 md:mx-16 justify-between my-8">
        <div className="flex sm:my-2 flex-col lg:flex-row  w-100 justify-between ">
          <h1 className="lg:text-2xl w-full text-xl ">
            <span className=" border-b-2 border-red-200">NEW</span> Products
          </h1>
        </div>

        <div className="flex w-100  lg:justify-between gap-8 ">
        {
            types.map((item)=>
            (
                <>
                    <Link to={`/Home/${item.id}`} key={item.id}  >
                        <div className={
                            type === item.id
                            ? "text-md text-red-400 border-b-2 border-red-200"
                            : " text-md text-gray-700"
                        }
                       
                        >
                        
                        <button type="button" onClick={()=>window.location.href=`/Home/${item.id}`}>

                        {item.type}
                        </button>
                        </div>
                    </Link>
                </>
            ))
        }

          
        </div>
      </div>
    </>
  );
}

export default MiniNavbar;
