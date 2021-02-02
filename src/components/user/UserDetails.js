import React, {useState} from 'react';
import './UserDetails.css';
import getCurrentDate from '../../utilities/CurrentDate';
import getCurrentTime from '../../utilities/CurrentTime';

const UserDetails = () => {

  const [userName, setUserName] = useState('Elsa Anderson');

  // let loginDate = getCurrentDate();
  const [date, setDate] = useState(getCurrentDate());
  const [time, setTime] = useState(getCurrentTime());

  return (
    <div>
      <div id="parentDiv">
        <img id="childDiv" src={`${process.env.PUBLIC_URL}/assets/images/avatar.png`} alt="Avatar" />
      </div>
      <div className="user-div">
        <div style={{fontSize: '12px', justifySelf: 'end'}}>
          <p className="text-color">{userName}</p>
        </div>
        <div>
          <p className="text-color" style={{fontSize: '12px', margin: '20px 0px 0px'}}>{date}</p>
          <p className="text-color" style={{fontSize: '18px', marginTop: '2px'}}>{time}</p>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;

