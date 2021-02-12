import React from 'react';
import './Header.scss';

export default function Header(props) {
    return (
      <div className="header-events">
          <p className="header-events__total">
              Count of events is: {props.eventsCount}
          </p>
      </div>
    );
}