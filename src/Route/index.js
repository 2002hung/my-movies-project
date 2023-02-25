import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { HomeContainer, AboutContainer, 
  MoviesContainer, TvSeriesContainer, 
  SearchContainer, DetailsContainer, 
  ContactContainer 
} from '../Container/index';

import { HeaderComponents, FooterComponents } from '../Components';

const RouterContainer = () => {
  return (
    <>
     <BrowserRouter>
        <HeaderComponents />
      <Routes>

        <Route path="/" element={<HomeContainer />} />
        <Route path="/about" element={<AboutContainer />} />
        <Route path="/movies" element={<MoviesContainer />} />
        <Route path="/series" element={<TvSeriesContainer />} />
        <Route path="/search" element={<SearchContainer />} />
        <Route path="/contact" element={<ContactContainer />} />

        <Route path="/details/:movieid/:mediatype" element={<DetailsContainer />} />
        
      </Routes>
        <FooterComponents />
     </BrowserRouter> 
    </>
  )
}

export default RouterContainer;
