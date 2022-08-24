import React, { Fragment, ReactElement, useEffect } from 'react';

import './ContactsComponent.scss';
import contacts from '../../__mocks__/contacts.json';
import chats from '../../__mocks__/chats.json';
import deliveryStatus from './doubleTicks.svg';
import { json } from 'stream/consumers';

const ContactsComponent = (): ReactElement => {
  type Contact = {
    userId: string;
    firstName: string;
    lastName: string;
    profilePic?: string;
  };

  return (
    <Fragment>
      {contacts
        ? contacts.map(
            ({ userId, firstName, lastName, profilePic }: Contact) => (
              <main className="main" key={userId}>
                <div className="user-side">
                  <div className="profile-pic-container">
                    <img
                      src={profilePic}
                      alt="profile-pic"
                      className="profile-pic"
                    />

                    <div className="status-box">
                      <div className="status" />
                    </div>
                  </div>
                </div>
                <div className="message-side">
                  <div className="contacts-details">
                    <div className="username">{firstName + ' ' + lastName}</div>
                    <div className="last-message">
                      <div className="delivery-status">
                        <img src={deliveryStatus} alt="delivery-status" />{' '}
                      </div>
                      <div className="message">
                        It was cool meeting you herencckjccj
                      </div>
                    </div>
                  </div>
                  <div className="message-details">
                    <div className="last-message-time">09.00 AM</div>
                    <div className="unread-count-wrapper">
                      <span className="count">5</span>
                    </div>
                  </div>
                </div>
              </main>
            ),
          )
        : ''}
    </Fragment>
  );
};

export default ContactsComponent;
