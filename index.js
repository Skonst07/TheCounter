const reset = document.getElementById("reset");
const increase = document.getElementById("increase");
const counter = document.getElementById("counter");
const hidden = document.getElementById("hidden");

let count = 0;

reset.onclick = function(){
    count = 0;
    counter.textContent = 0
    hidden.style.display = "none";
}

increase.onclick = function(){
    count++;
    counter.textContent = count;

     if (count === 100) {
        hidden.style.display = "block";
    }
}
