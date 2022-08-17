import React from "react";
import { useState } from "react";


function ImageGrid() {
  const [images, setImages] = useState([
    {
      url: "https://images.pexels.com/photos/852860/pexels-photo-852860.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      url: "https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      url: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      url: "https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      url: "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ]);
  return (
    <div className="container mx-auto p-8">
      <div className="flex flex-row flex-wrap -mx-2">
        <div className="w-full md:w-1/2 sm:w-full h-64 md:h-auto mb-4 px-2">
          <a
            className="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover
            bg-[url('https://images.pexels.com/photos/3378919/pexels-photo-3378919.jpeg?auto=compress&cs=tinysrgb&w=600')]"
            href="#"
            title="Link"
          >
            
          </a>
        </div>
        <div className="w-full md:w-1/2 mb-4 px-2">
          <div className="flex flex-col sm:flex-row md:flex-col -mx-2">
            <div className="w-full sm:w-full  h-48 xl:h-64 mb-4 sm:mb-0 md:mb-4 px-2">
              <a
                className="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover 
                bg-[url('https://images.pexels.com/photos/2829369/pexels-photo-2829369.jpeg?auto=compress&cs=tinysrgb&w=600')]"
                href="#"
                title="Link"
              >
                
              </a>
            </div>
            <div className="w-full sm:w-full lg:w-full h-48 xl:h-64 px-2">
              <a
                className="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover 
                bg-[url('https://images.pexels.com/photos/1192047/pexels-photo-1192047.jpeg?auto=compress&cs=tinysrgb&w=600')]"
                href="#"
                title="Link"
              >
                
              </a>
            </div>
          </div>
        </div>
        
          
        </div>
      </div>
    
  );
}

export default ImageGrid;
