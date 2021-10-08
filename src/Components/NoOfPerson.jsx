import { useState } from "react";
import { MdArrowDropUp, MdArrowDropDown } from "react-icons/md";
const NoOfPerson = ({ category, defaultVal }) => {
  const [counter, updateCounter] = useState(defaultVal);
  const increment = () => {
    updateCounter((currCount) => currCount + 1);
  };
  const decrement = () => {
    if (counter !== defaultVal) updateCounter((currCount) => currCount - 1);
  };
  const customClass = counter === defaultVal ? "disabled" : "arrow-btn";
  return (
    <div className="person-counter">
      <p>{category}</p>
      <div className="counts">
        <span>{counter}</span>
        <span className="counter-btn">
          <MdArrowDropUp onClick={increment} className="arrow-btn" />
          <MdArrowDropDown onClick={decrement} className={customClass} />
        </span>
      </div>
    </div>
  );
};
export default NoOfPerson;
