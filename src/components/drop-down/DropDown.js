import React, {useState} from 'react';
import './DropDown.css';

const DropDown = ({dropList, upperCase}) => {

  const [overview, setOverview] = useState(dropList);

  const handleChange = (e) => {
    console.log(e.target.value);
    setOverview(e.target.value);
  }

  return (
    <div className="drop-down">
      <div>
        <select value={overview.value} onChange={handleChange} multiple={false}>
          {dropList.map(item => {
            return <option key={item.value} value={item.value}>{upperCase ? item.title.toUpperCase() : item.title.charAt(0).toUpperCase() + item.title.slice(1)}</option>
          })}
        </select>
      </div>
    </div>
  );
};

export default DropDown;

