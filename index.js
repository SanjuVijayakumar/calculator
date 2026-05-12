function incrementCounter() {
    let counter = document.getElementById("counter");
    let currentValue = parseInt(counter.value);
    counter.value = currentValue + 1;
}

function decrementCounter() {
    let counter = document.getElementById("counter");
    let currentValue = parseInt(counter.value);
    counter.value = currentValue - 1;

    if (counter.value < 0) {
        counter.value = 0;
    }
}

function resetCounter() {
    let counter = document.getElementById("counter");
    counter.value = 0;
}