
let counterElement = document.getElementById("countervalue")

function onIncrement() {
let olde = counterElement.textContent;
let newele = parseInt(olde)+1;
counterElement.textContent = newele 
if (newele>0){
    counterElement.style.color = "purple";
}

}
function onDecrement() {
    let olde = counterElement.textContent;
    let newele = parseInt(olde)-1;
    counterElement.textContent = newele
    if (newele<0){
        counterElement.style.color = "pink";
    }
}
function reset() {
counterElement.textContent = 0
counterElement.style.color = "black"
}