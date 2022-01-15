const countElement = document.getElementById('count'); 

let count = 0;
countElement.innerHTML = count;

function handleDecrease() {
    count = count - 1;
    countElement.innerHTML = count;
}

function handleReset() {
    count = count = 0;
    countElement.innerHTML = count;
}

function handleIncrease() {
     count = count + 1;
    countElement.innerHTML = count;
}