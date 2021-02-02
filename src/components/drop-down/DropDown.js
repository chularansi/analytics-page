import React, {useState} from 'react';
import './DropDown.css';

const DropDown = ({dropList, upperCase}) => {

  // const dropList = [
  //   {
  //     value: 'overview1',
  //     title: 'overview' 
  //   },
  //   {
  //     value: 'overview2',
  //     title: 'overview 2' 
  //   },
  //   {
  //     value: 'overview3',
  //     title: 'overview 3' 
  //   }
  // ]

  const [overview, setOverview] = useState(dropList);

  const handleChange = (e) => {
    console.log(e.target.value);
    setOverview(e.target.value);
  }

  return (
    <div className="drop-down">
      <div>
        <select value={overview} onChange={handleChange}>
          {dropList.map(item => {
            return <option key={item.value} value={item.value}>{upperCase ? item.title.toUpperCase() : item.title.charAt(0).toUpperCase() + item.title.slice(1)}</option>
          })}
        </select>
      </div>
    </div>
  );
};

export default DropDown;

