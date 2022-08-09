let count = 0;

let increment = document.getElementById("increment");
let decrecrement = document.getElementById("decrement");
let reset = document.getElementById("reset");
let counter = document.getElementById("value")




increment.addEventListener("click",function() {
   count++;
   currentCount();
   changeColor();
})

decrement.addEventListener("click",function() {
   count--;
   currentCount();
   changeColor();
})

reset.addEventListener("click",function() {
   count = 0;
   currentCount();
   changeColor();
})

function currentCount(){
   counter.innerText = count;
} 

function changeColor(){
   if (count > 0){
      document.getElementById("value").style.color = "green"
   }
   else if (count < 0){ 
      document.getElementById("value").style.color = "red"
   }
   else document.getElementById("value").style.color = "black"
}