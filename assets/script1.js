let currentDate = new Date();
let currDay = currentDate.getDate()
let currMonth = currentDate.getMonth() + 1
let currYear = currentDate.getFullYear()
console.log(currDay);
console.log(currMonth);
console.log(currYear);
console.log( "yyyy/mm/dd" + "<b>" + currDay + "/" + currMonth + "/" + currYear + "</b>" + currHour + currMinute + currSeconds);

const element = document.getElementById('date_time');
      
setInterval(function () {
  const currentDate = new Date();
  element.innerText = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
}, 1000);

