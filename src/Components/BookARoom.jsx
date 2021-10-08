import NoOfPerson from "./NoOfPerson";
import DatePickerComp from "./DatePickerComp";

const BookARoom = () => {
  return (
    <div className="booking">
      <DatePickerComp category="Check In" />
      <DatePickerComp category="Check Out" />
      <NoOfPerson category="Adults" defaultVal={1} />
      <NoOfPerson category="Kids" defaultVal={0} />
      <div className="search-btn">
        <button>Search</button>
      </div>
    </div>
  );
};
export default BookARoom;
