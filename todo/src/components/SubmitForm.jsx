import React, {useEffect, useState} from "react";
import "./SubmitForm.scss";


export default function SubmitForm(props) {
    const [value, setValue] = useState("");

    const handleInputChange = (e) => {
        e.preventDefault();
        setValue(e.target.value);
    }

    return (
      <form className="submit-event-form" onSubmit={(e) => {
          e.preventDefault();
          props.handleSubmitValue(value);
          setValue('');
      }}>
        <input className="submit-event-form__input" type="text" value={value} onChange={handleInputChange} />
        <input className="submit-event-form__submit" type="submit" value="send" />
      </form>
    );
}