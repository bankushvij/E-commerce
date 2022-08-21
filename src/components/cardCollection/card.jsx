import React, { useState, useEffect } from "react";

import { BiRupee } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { getImage } from "../../redux/reducer/items/items.action";
import { BsArrowsAngleExpand, BsBag } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";

function Card(props) {
  const [image, setImage] = useState({ images: [] });
  const [isShown, setIsShown] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    props.photos &&
      dispatch(getImage(props.photos)).then((data) => {
        const images = data.payload.images;
        setImage((prev) => ({ ...prev, images }));
      });
  }, [props.photos]);

  return (
    <>
    <div className="w-100 h-100">
      <div
        className="flex justify-center md:w-full lg:w-full "
      
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        <div className="rounded-lg shadow-lg bg-white max-w-sm relative ">
          <a
            href="#!"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            className="relative"
          >
            <img
              className=" rounded-t-lg h-72 w-80 lg:w-80 lg:h-80"
              src={image.images.length && image.images[0].location}
              alt=""
            />
          </a>
          {isShown && (
            <>
              <div className=" absolute flex flex-row justify-center items-align-center left-1/4 gap-3 z-10 rounded-full w-1/2 h-12 top-60 animate-fade-in-up ">
                <span className=" bg-gray-200 text-black rounded-full h-10 w-10 text-center p-2 text-2xl hover:bg-red-600 hover:animate-wiggle">
                  <BsArrowsAngleExpand />
                </span>
                <span className=" bg-white text-black rounded-full h-10 w-10 p-2 text-center text-2xl hover:bg-red-600 hover:animate-wiggle">
                  <BsBag />
                </span>
                <span className=" bg-white text-black rounded-full h-10 w-10 p-2 text-center text-2xl hover:bg-red-600 hover:animate-wiggle">
                  <AiOutlineHeart />
                </span>
              </div>
            </>
          )}
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">
              {props.itemType}
            </h5>
            <p className="text-gray-700 text-base mb-4 flex flex-col">
              <span className="flex ">
                <BiRupee /> {props.price} only
              </span>
              Brand Name:- {props.brand}
            </p>
            <button
              type="button"
              className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Add To CART
            </button>
          </div>
        </div>
      </div>
        </div>
    </>
  );
}

export default Card;
