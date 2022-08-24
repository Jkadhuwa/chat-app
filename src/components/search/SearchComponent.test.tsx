import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import SearchComponent from './SearchComponent';

afterEach(cleanup);

describe('Tests for search component', () => {
  beforeEach(() => {
    render(<SearchComponent />);
  });

  it('Should render search icon with alt ="search-icon', () => {
    const searchIcon = screen.getByRole('img');
    expect(searchIcon).toHaveAttribute('alt', 'search-icon');
  });

  it('Should render input element with placeholder = "SEARCH"', () => {
    const searchInput = screen.getByPlaceholderText('SEARCH');
    expect(searchInput).toBeInTheDocument();
  });
});
