// src/Calendar.js
import React, { useState, useEffect } from "react";
// import dayjs from "dayjs";
// import "dayjs/locale/en";
import CalendarComponent from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../../index.css";

const Calendar = () => {
  const [date, setDate] = useState(new Date());

  function onChange(date) {
    setDate(date);
  }
  return (
    <div className="calendar-container">
      <CalendarComponent onChange={onChange} value={date} />
      {/* {date.length > 0 ? (
        <p className="text-center">
          <span className="bold">Start:</span> {date[0].toDateString()}
          &nbsp;|&nbsp;
          <span className="bold">End:</span> {date[1].toDateString()}
        </p>
      ) : (
        <p className="text-center">
          <span className="bold">Default selected date:</span>{" "}
          {date.toDateString()}
        </p>
      )} */}
    </div>
  );
};

export default Calendar;
