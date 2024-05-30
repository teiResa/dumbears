
let getChinaTimeEN = function(){
 document.getElementById('date_time_EN').innerHTML = new Date().toLocaleString('en-CA', {timeZone: 'Asia/Shanghai', timeStyle: 'short', hourCycle:'h12', dateStyle: 'medium'});
}

getChinaTimeEN();
setInterval(getChinaTimeEN, 1000);

let getChinaTimeZH = function(){
 document.getElementById('date_time_ZH').innerHTML = new Date().toLocaleString('en-CA', {timeZone: 'Asia/Shanghai', timeStyle: 'medium', hourCycle:'h24'});
}

getChinaTimeZH();
setInterval(getChinaTimeZH, 1000);

