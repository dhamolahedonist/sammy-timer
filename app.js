const countElement = document.getElementById('count'); 

let count = 0;
updateCountElement();

function handleDecrease() {
    if (count <= 0) {
       count = count - 1;
       updateCountElement();
    }
    if (count < 0) {
        countElement.style.color = 'red';
    }
}

function handleReset() {
    if(count != 0) {
         count = 0;
        updateCountElement();
    }
    if(count === 0) {
        countElement.style.color = '#222';
    }
}

function handleIncrease() {
    if (count => 0) {
        count = count + 1;
        updateCountElement();
     } 
      if (count > 0) {
        countElement.style.color = 'green';
    }         
}

function updateCountElement() {
   countElement.innerHTML = count; 
}