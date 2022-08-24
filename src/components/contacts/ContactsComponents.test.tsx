import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import ContactsComponent from './ContactsComponent';

afterEach(cleanup);

describe('Tests for ContactsComponent', () => {
  beforeEach(() => {
    render(<ContactsComponent />);
  });

  it('Should render a profile pic with alt="profile-pic"', () => {
    const profilePic = screen.getAllByRole('img');
    expect(profilePic[0]).toHaveAttribute('alt', 'profile-pic');
  });
});
