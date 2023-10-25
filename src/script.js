let display = document.getElementById('cal-display');
let history = [];
let currentHistoryIndex = -1;
function addToDisplay(value) {
display.value += value;
}
function clearDisplay() {
display.value = '';
}
function calculate() {
    const expression = display.value; 
    //retriving expression from display,evalutaing expression using eval() function.
    try{const result = eval(expression);
        if (isNaN(result)) {
            display.value = "Undefined";}
        //if result is invalid, then show "Undefined"     
        else{history.push({ expression, result });
        //if result is valid,expression and result added to history array
        currentHistoryIndex = history.length - 1;
        display.value = result;}
        }catch(error){
        display.value="Error"}
        
}         

function clearHistory() {
history = [];
}
function showPreviousCalculation() {
if (currentHistoryIndex > 0 && currentHistoryIndex < history.length) {
    //if currentHistoryIndex greater than 0 and also less than length of history array,
    //post decrement the value of the Index.and display value of previous calculation expression and result.
    currentHistoryIndex--;
    display.value = history[currentHistoryIndex].expression + " = " + history[currentHistoryIndex].result;
}
}
function showNextCalculation() {
if (currentHistoryIndex < history.length - 1) {
    currentHistoryIndex++;
    display.value = history[currentHistoryIndex].expression + " = " + history[currentHistoryIndex].result;
}
}