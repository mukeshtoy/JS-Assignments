const name = prompt("Enter your Name: ");
n.innerText += `Welcome ${name}`;

//clock
const ctime = document.getElementById('t');
function clock(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    ctime.innerText = time;
}
setInterval(clock,1000);


// mode
const dm = document.getElementById('dark');
dm.onclick = function changeColor(){
   document.body.classList.toggle('black');
   document.body.classList.toggle('white');
}