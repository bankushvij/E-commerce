import React from "react";
import { useState } from "react";

function CollectionGrid() {
  const [hotTrend, setHotTrend] = useState([
    {
      img: "https://preview.colorlib.com/theme/ashion/img/trend/xht-1.jpg.pagespeed.ic.egi4bL3t5c.webp",
      name: "chain bucket bag",
      price: "$200",
    },
    {
      img: "https://preview.colorlib.com/theme/ashion/img/trend/xht-2.jpg.pagespeed.ic.3YjuD2AOub.webp",
      name: "chain bucket bag",
      price: "$200",
    },
    {
      img: "https://preview.colorlib.com/theme/ashion/img/trend/xht-3.jpg.pagespeed.ic.fw_LsIXAiZ.webp",
      name: "chain bucket bag",
      price: "$200",
    },
  ]);
  const [bestSeller, setBestSeller] = useState([
    {
      img: "https://preview.colorlib.com/theme/ashion/img/trend/xbs-1.jpg.pagespeed.ic.mJ3HA8np2n.webp",
      name: "chain bucket bag",
      price: "$200",
    },
    {
      img: "https://preview.colorlib.com/theme/ashion/img/trend/xbs-2.jpg.pagespeed.ic.oPC5eRYONC.webp",
      name: "chain bucket bag",
      price: "$200",
    },
    {
      img: "https://preview.colorlib.com/theme/ashion/img/trend/xbs-3.jpg.pagespeed.ic.UbErREAs1-.webp",
      name: "chain bucket bag",
      price: "$200",
    },
  ]);
  const [feature, setFeature] = useState([
    {
      img: "https://preview.colorlib.com/theme/ashion/img/trend/xf-2.jpg.pagespeed.ic.LE7FQXfxeP.webp",
      name: "chain bucket bag",
      price: "$200",
    },
    {
      img: "https://preview.colorlib.com/theme/ashion/img/trend/xf-1.jpg.pagespeed.ic.Q7t675Gcer.webp",
      name: "chain bucket bag",
      price: "$200",
    },
    {
      img: "https://preview.colorlib.com/theme/ashion/img/trend/xf-3.jpg.pagespeed.ic.larkQpUfvs.webp",
      name: "chain bucket bag",
      price: "$200",
    },
  ]);

  return (
    <div>
      <div className="flex my-12 flex-col mx-3 md:mx-6 lg:p-4 lg:flex-row w-100 h-auto justify-around align-items-center gap-3 ">
        <div className="flex flex-col w-60 h-auto gap-4">
          <h1 className="text-2xl text-bold ">
            <span className="border-b-2 border-red-200">Hot</span> Trend
          </h1>
          {hotTrend.map((data) => (
            <>
              <div className="flex flex-row ">
                <div className="w-full h-auto">
                  <img src={data.img} alt="" />
                </div>
                <div className="flex flex-col w-48 text-sm">
                  <h3>{data.name}</h3>
                  <h3>{data.price}</h3>
                </div>
              </div>
            </>
          ))}
        </div>
        <div className="flex flex-col w-60 h-auto gap-4">
          <h1 className="text-2xl text-bold ">
            <span className="border-b-2 border-red-200">Feature</span> 
          </h1>
          {feature.map((data) => (
            <>
              <div className="flex flex-row ">
                <div className="w-full h-auto">
                  <img src={data.img} alt="" />
                </div>
                <div className="flex flex-col w-48 text-sm">
                  <h3>{data.name}</h3>
                  <h3>{data.price}</h3>
                </div>
              </div>
            </>
          ))}
        </div>
        <div className="flex flex-col w-60 h-auto gap-4">
          <h1 className="text-2xl text-bold ">
            <span className="border-b-2 border-red-200">Best</span> Seller
          </h1>
          {bestSeller.map((data) => (
            <>
              <div className="flex flex-row ">
                <div className="w-full h-auto">
                  <img src={data.img} alt="" />
                </div>
                <div className="flex flex-col w-48 text-sm">
                  <h3>{data.name}</h3>
                  <h3>{data.price}</h3>
                </div>
              </div>
            </>
          ))}
        </div>
        
      </div>
    </div>
  );
}

export default CollectionGrid;
