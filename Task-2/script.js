let currentValue ='';
let operator = '';
let result ='';

function calculate() {
    try {
        result = eval(currentValue);
        currentValue = result.toString(); 
        updateDisplay();
    } catch (error) {
        result = 'Error';
        updateDisplay();
    }
}

function appendValue(value) {
    currentValue += value;
    updateDisplay();
}

function setOperator(op) {
    operator = op;
    currentValue += operator;
    updateDisplay();
}

function clearDisplay() {
    currentValue = '';
    operator = '';
    result = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = currentValue;
}