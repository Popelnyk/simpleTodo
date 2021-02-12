import React, {useState} from "react";
import Header from "../components/Header";
import "./Todo.scss";
import EventList from "../components/EventList";
import SubmitForm from "../components/SubmitForm";


export default function Todo(props) {
    const [eventsList, setEventsList] = useState([]);

    const handleSubmitEvent = (value) => {
        setEventsList(prevState => {
            const newEventsList = [...prevState];
            newEventsList.push(value);
            return newEventsList;
        });
    }

    return (
        <div className="todo-container">
            <Header eventsCount={eventsList.length} />
            <EventList events={eventsList} />
            <SubmitForm handleSubmitValue={handleSubmitEvent} />
        </div>
    );
}