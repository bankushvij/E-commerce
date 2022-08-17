import React from "react";

// components
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ImageGrid from "../components/ImageGrid/imageGrid";
import CardCollection from "../components/cardCollection/cardCollection";
import Tab from "../components/FooterTab/Tab";
import SaleBanner from "../components/saleBanner/SaleBanner";
import MiniNavbar from "../components/Navbar/MiniNavbar";
import CollectionGrid from "../components/Grid/CollectionGrid";
function Homepagelayout({ children }) {
 
  return (
    <div>
      <Navbar />
      <div className="w-100 h-100 lg:mx-4">
        <ImageGrid />
        <MiniNavbar />
        
      </div>
      <div>{children}</div>
      <div>
        <img
          src="https://myshopmain.s3.ap-south-1.amazonaws.com/first.png"
          alt="banner"
        />
      </div>
      <CollectionGrid />
      <div className="lg:m-4 lg:p-4 my-8">
        <SaleBanner />
        <Tab />
      </div>

      <Footer />
    </div>
  );
}

export default Homepagelayout;
