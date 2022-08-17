import React from 'react'
import CardCollection from '../components/cardCollection/cardCollection';
import Footer from '../components/Footer/Footer';
import Navbar from "../components/Navbar/Navbar";
import FilterBar from "../components/FilterBar/FilterSideBar";

function CommonPageLayout() {
  return (
   <>
    <Navbar/>
    <FilterBar/>
    <Footer/>
   </>
  )
}

export default CommonPageLayout;
