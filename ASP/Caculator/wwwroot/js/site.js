// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

const calculator = {
    result: "0",
    operator: "=",
    isWait: false,
    operand: "0"
};

function addDecimal(decimal) {
    if (calculator.isWait) {
        calculator.operand = decimal;
        calculator.isWait = false;
    }
    else {
        if (decimal === '.') {
            if (!calculator.operand.includes('.')) {
                calculator.operand += decimal;
            }
            return;
        }
        calculator.operand = calculator.operand === '0' ? decimal : calculator.operand + decimal;
    }
}

function handleOperator(operator) {
    if (!calculator.isWait) {
        var data = new FormData();
        data.append('first', parseFloat(calculator.result));
        data.append('operation', calculator.operator.charAt(0));
        data.append('second', parseFloat(calculator.operand));

        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("POST", "https://localhost:7261/");
        xmlhttp.onload = function() {
            calculator.result = this.responseText;
            calculator.operand = this.responseText;
            display();
        }

        xmlhttp.send(data);
    }

    calculator.isWait = true;
    calculator.operator = operator;
}

function clearDisplay() {
    calculator.result = 0;
    calculator.operator = "=";
    calculator.isWait = false;
    calculator.operand = "0";
}

function display() {
    document.querySelector('.decimal-display').value = calculator.operand;
}
display();

const panel = document.querySelector('.panel');
panel.addEventListener('click', (e) => {
    if (e.target.classList.contains('operator')) {
        handleOperator(e.target.value);
    }
    else if (e.target.classList.contains('decimal')) {
        addDecimal(e.target.value);
    }
    else if (e.target.classList.contains('clear')) {
        clearDisplay();
    }
    display();
});