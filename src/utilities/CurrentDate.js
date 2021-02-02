const getCurrentDate = (separator='-') => {

  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  
  return `${date}${separator}${month<10?`0${month}`:`${month}`}${separator}${year}`;

  // const currentDate = new Intl.DateTimeFormat("en-GB", {
  //   year: "numeric",
  //   month: "2-digit",
  //   day: "2-digit"
  // }).format(new Date());

  // return currentDate;
};

export default getCurrentDate;
