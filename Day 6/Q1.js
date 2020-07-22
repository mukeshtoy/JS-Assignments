let array = ["red", "blue", "yellow", "green"];
var i = 0;
function changeColor(){
    let color = array[i++];
    document.body.style.backgroundColor = `${color}`;
}
setInterval(changeColor, 5000)