import React, { ReactElement } from 'react';
import './SearchComponent.scss';
import searchIcon from './search.svg';

const SearchComponent = (): ReactElement => {
  return (
    <section className="search">
      <div className="input-wrapper">
        <span className="input-wrapper__icon">
          <img src={searchIcon} alt="search-icon" />
        </span>
        <input
          type="text"
          placeholder="SEARCH"
          className="input-wrapper__input"
        />
      </div>
    </section>
  );
};

export default SearchComponent;
