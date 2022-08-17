import React from "react";
import CardCollection from "../components/cardCollection/cardCollection";
import { useParams } from "react-router-dom";
function Homepage() {
  const { type } = useParams();
  return (
    <div>
      <div className="w-100 h-100 lg:mx-4">
        {type === "Men" && <CardCollection prop={type} />}
        {type === "All" && <CardCollection prop={type} />}
        {type === "Women" && <CardCollection prop={type} />}
        {type === "Shoes" && <CardCollection prop={type} />}
        {type === "Accessory" && <CardCollection prop={type} />}
      </div>
    </div>
  );
}

export default Homepage;
