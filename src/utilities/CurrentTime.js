const getCurrentTime = () => {

  let newDate = new Date();
  let hours = newDate.getHours();
  let minutes = newDate.getMinutes();

  let ampm = hours > 12 ? 'PM' : 'AM';

  hours = hours > 12 ? `${hours-12}` : `${hours}`;
  minutes = minutes > 9 ? `${minutes}` : `0${minutes}`;

  return `${hours}.${minutes} ${ampm}`;
  
};

export default getCurrentTime;