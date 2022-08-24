import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import App from './App';

afterEach(cleanup);

describe('App Component Tests', () => {
  render(<App />);
  it('Should have a search input rendered ', () => {
    const searchInput = screen.getByRole('textbox');
    expect(searchInput).toBeInTheDocument();
  });
});
