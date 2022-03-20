import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

import './SearchBar.scss';

export const SearchBar = () => {
  return (
    <div className="search-bar__container">
      <input type="text" placeholder="Search" className="search-bar__element" />
      <SearchIcon fontSize="large" className="search-bar__icon" />
    </div>
  );
};
