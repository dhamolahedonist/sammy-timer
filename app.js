const countElement = document.getElementById('count'); 

let count = 0;
updateCountElement();

function handleDecrease() {
    if (count > 0) {
       count = count - 1;
       updateCountElement();
    } else {
        alert('Ha our count is already zero na')
    }

}

function handleReset() {
    count = count = 0;
    updateCountElement();
    
}

function handleIncrease() {
    if (count < 20) {
    count = count + 1;
     updateCountElement();
    }else {
        alert('maximum number exceeded')
    }
        
}

function updateCountElement() {
   countElement.innerHTML = count; 
}