
import React, { Fragment } from 'react';
import Hero from '../Components/Hero/Hero';
import { Outlet } from 'react-router-dom';
import Popular from '../Components/Popular/Popular';
import Offers from '../Components/Offers/Offers';
import NewCollections from '../Components/NewCollections/NewCollections';
import NewsLetter from '../Components/NewsLetter/NewsLetter';






const Shop = () => {
    return (
      

          
          <Fragment>
            <Hero />
            <Outlet/>
            <Popular/>
            <Offers />
            <NewCollections />
            <NewsLetter/>
            
           
         </Fragment>
       

    );
}

export default Shop;
