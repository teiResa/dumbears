let currentDate = new Date();
let currHour = currentDate.getHours();
let currMinute = currentDate.getMinutes();
let currSeconds = currentDate.getSeconds();
let currDay = currentDate.getDate()
let currMonth = currentDate.getMonth() + 1
let currYear = currentDate.getFullYear()
console.log(currDay);
console.log(currMonth);
console.log(currYear);
console.log( "yyyy/mm/dd" + "<b>" + currDay + "/" + currMonth + "/" + currYear + "</b>" + currHour + currMinute + currSeconds);

/* my gosh, i feel like crud. 05-27
Alright! Let's do this! 05-28
*/


const timeZonesChina = [
 'Asia/Shanghai',  'Asia/Hong_Kong'
]
timeZonesChina.forEach(timeZone => {
 console.log(timeZone)
})


const wowowow = document.getElementById('date_time');
      
setInterval(function () {
 /*
  const currentDate = new Date();
  */
  wowowow.innerText = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
}, 200);

