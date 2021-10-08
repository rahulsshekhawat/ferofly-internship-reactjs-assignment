import { useState } from "react";
import { BsCalendar4 } from "react-icons/bs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerComp = ({ category }) => {
  const [date, updateDate] = useState(null);
  return (
    <div className="date-picker-wrapper">
      <p>{category}</p>
      <div className="date-picker">
        <DatePicker
          selected={date}
          onChange={(newDate) => updateDate(newDate)}
          placeholderText="DD/MM/YYY"
          isClearable
        />

        <BsCalendar4 />
      </div>
    </div>
  );
};
export default DatePickerComp;
