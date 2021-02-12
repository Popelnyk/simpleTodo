import React, {useState} from 'react';
import "./EventList.scss";

export default function EventList(props) {
    const events = props.events;

    return (
      <div className="event-list">
          {events.map((element, index) => <li className="event-list__item" key={index} id={index}> {element} </li>)}
      </div>
    );
}