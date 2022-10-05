var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

function increment () {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber
    
    if (currentNumber > 0){
        currentNumberWrapper.classList.add('numeroPositivo')

        currentNumberWrapper.classList.remove('numeroNegativo')
    }

}

function decrement () {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    
    if (currentNumber < 0){
        currentNumberWrapper.classList.add('numeroNegativo')
    
        currentNumberWrapper.classList.remove('numeroPositivo')
        
    }
}


