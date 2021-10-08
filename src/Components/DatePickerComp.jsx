import { useState, forwardRef } from "react";
import { BsCalendar4 } from "react-icons/bs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerComp = ({ category }) => {
  const [date, updateDate] = useState(null);
  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <div className="custom-input">
      <p ref={ref}>{value ? value : "DD/MM/YYY"}</p>
      <BsCalendar4 className="calender-icon" onClick={onClick} />
    </div>
  ));
  return (
    <div className="date-picker-wrapper">
      <p>{category}</p>
      <div className="date-picker">
        <DatePicker
          selected={date}
          onChange={(newDate) => updateDate(newDate)}
          customInput={<CustomInput />}
        />
      </div>
    </div>
  );
};
export default DatePickerComp;
