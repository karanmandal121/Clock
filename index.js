let date;
let time;
let a;

// Const option is a part of TolocalDateString
const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  
setInterval(() => {
    a = new Date();
    date = a.toLocaleDateString(undefined,options);
    time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
    document.getElementById('time').innerHTML =  time+   "<br> on"  + date;
}, 1000);


    
b=new Date();
// b.toLocaleDateString();
document.getElementById('month').innerHTML=b;
