const countElement = document.getElementById('count'); 

let count = 0;
updateCountElement();

function handleDecrease() {
    if (count > 0) {
       count = count - 1;
       updateCountElement();
    }
}

function handleReset() {
    if(count != 0) {
         count = 0;
        updateCountElement();
    }
}

function handleIncrease() {
    if (count < 20) {
        count = count + 1;
        updateCountElement();
     }           
}

function updateCountElement() {
   countElement.innerHTML = count; 
}