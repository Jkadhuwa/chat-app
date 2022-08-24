import React, { ReactElement } from 'react';
import './App.scss';
import SearchComponent from './components/search/SearchComponent';

import ContactsComponent from './components/contacts/ContactsComponent';

const App = (): ReactElement => {
  return (
    <main className="main-page">
      <section className="contacts-section">
        {/* <div className="contacts-section__profile">
          
        </div> */}
        <div className="contacts-section__search">
          <SearchComponent />
        </div>
        <div className="contacts-section__contacts">
          <ContactsComponent />
        </div>
      </section>
      <section className="chat-section"></section>
    </main>
  );
};

export default App;
