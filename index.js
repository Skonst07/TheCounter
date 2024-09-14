const reset = document.getElementById("reset");
const increase = document.getElementById("increase");
const counter = document.getElementById("counter");
const hidden = document.getElementById("hidden");

let count = 0;

function updateCounter() {
    count++;
    counter.textContent = count;

    if (count >= 100) {
        hidden.style.display = "block";
    }
}

function resetCounter() {
    count = 0;
    counter.textContent = count;
    hidden.style.display = "none";
}

// Mouse click events
increase.addEventListener('click', updateCounter);
reset.addEventListener('click', resetCounter);

// Touch events
increase.addEventListener('touchend', (event) => {
    event.preventDefault(); // Prevents any default action for touch
    updateCounter();
});

reset.addEventListener('touchend', (event) => {
    event.preventDefault(); // Prevents any default action for touch
    resetCounter();
});
