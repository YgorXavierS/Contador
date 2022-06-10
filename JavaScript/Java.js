var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;
var adicionar = document.querySelectorAll("#adicionar");
document.querySelector("#increment").addEventListener('onclick',increment)
document.querySelector("#decrement").addEventListener('onclick',decrement)

function removeEvent(){

}

function increment(){
    currentNumber++;
    currentNumberWrapper.innerHTML = currentNumber;
    var numero = document.getElementById("currentNumber").value;
    if(numero == 5){
        adicionar.disabled=true;
    }
    if(currentNumber < 0){
        document.getElementById('currentNumber').style.color='red';
    }
}

function decrement(){
    currentNumber--;
    currentNumberWrapper.innerHTML = currentNumber;
    if(currentNumber < 0){
        document.getElementById('currentNumber').style.color='red';
    }else{
        document.getElementById('currentNumber').style.color="white";
    }
}
