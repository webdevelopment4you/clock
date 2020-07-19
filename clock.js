console.log("Hello Bhomeshwar");

let today;
let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

console.log(today);

let time = document.getElementById("time");

setInterval( ()=> {

    today = new Date();

    time.innerHTML = `Current Time ${today.toLocaleTimeString()} on ${today.toLocaleString('en-US', options)}`;

},1000)

