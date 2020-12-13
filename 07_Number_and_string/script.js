let lastOperand = 0;
let operation = null;

const inputWindow = document.getElementById('inputWindow');
inputWindow.value = '0';
const historyWindow = document.getElementById('historyWindow')


// buttons

document.getElementById('btn_1').addEventListener('click', function () {
    if (inputWindow.value === '0') {
        inputWindow.value = '';
    }
    inputWindow.value += '1';
})

document.getElementById('btn_2').addEventListener('click', function () {
    if (inputWindow.value === '0') {
        inputWindow.value = '';
    }
    inputWindow.value += '2';
})

document.getElementById('btn_3').addEventListener('click', function () {
    if (inputWindow.value === '0') {
        inputWindow.value = '';
    }
    inputWindow.value += '3';
})

document.getElementById('btn_4').addEventListener('click', function () {
    if (inputWindow.value === '0') {
        inputWindow.value = '';
    }
    inputWindow.value += '4';
})

document.getElementById('btn_5').addEventListener('click', function () {
    if (inputWindow.value === '0') {
        inputWindow.value = '';
    }
    inputWindow.value += '5';
})

document.getElementById('btn_6').addEventListener('click', function () {
    if (inputWindow.value === '0') {
        inputWindow.value = '';
    }
    inputWindow.value += '6';
})

document.getElementById('btn_7').addEventListener('click', function () {
    if (inputWindow.value === '0') {
        inputWindow.value = '';
    }
    inputWindow.value += '7';
})

document.getElementById('btn_8').addEventListener('click', function () {
    if (inputWindow.value === '0') {
        inputWindow.value = '';
    }
    inputWindow.value += '8';
})

document.getElementById('btn_9').addEventListener('click', function () {
    if (inputWindow.value === '0') {
        inputWindow.value = '';
    }
    inputWindow.value += '9';
})

document.getElementById('btn_0').addEventListener('click', function () {
    if (inputWindow.value === '0') {
        inputWindow.value = '';
    }
    inputWindow.value += '0';
})

document.getElementById('btn_dot').addEventListener('click', function () {
    inputWindow.value += '.';
})

document.getElementById('btn_min').addEventListener('click', function () {
    inputWindow.value = (-1) * inputWindow.value;
})

document.getElementById('btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '0';
})


// functions

document.getElementById('btn_sum').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'sum';
    inputWindow.value = '';
})

document.getElementById('btn_def').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'def';
    inputWindow.value = '';
})

document.getElementById('btn_multipl').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'multipl';
    inputWindow.value = '';
})

document.getElementById('btn_split').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'split';
    inputWindow.value = '';
})

document.getElementById('btn_squar').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'squar';
    inputWindow.value = '';
})


document.getElementById('btn_calc').addEventListener('click', function () {
    if (operation === 'sum') {
        const secondOperand = parseFloat(inputWindow.value);
        const result = lastOperand + secondOperand;
        historyWindow.value += lastOperand + ' + ' + secondOperand + ' = ' + result + '\n';
        lastOperand = null;
        secondOperand = null;
        operation = 0;
        inputWindow.value = result;
    }

    if (operation === 'def') {
        const secondOperand = parseFloat(inputWindow.value);
        const result = lastOperand - secondOperand;
        historyWindow.value += lastOperand + ' - ' + secondOperand + ' = ' + result + '\n';
        lastOperand = null;
        secondOperand = null;
        operation = 0;
        inputWindow.value = result;
    }

    if (operation === 'multipl') {
        const secondOperand = parseFloat(inputWindow.value);
        const result = lastOperand * secondOperand;
        historyWindow.value += lastOperand + ' * ' + secondOperand + ' = ' + result + '\n';
        lastOperand = null;
        secondOperand = null;
        operation = 0;
        inputWindow.value = result;
    }

    if (operation === 'split') {
        const secondOperand = parseFloat(inputWindow.value);
        const result = lastOperand / secondOperand;
        historyWindow.value += lastOperand + ' / ' + secondOperand + ' = ' + result + '\n';
        lastOperand = null;
        secondOperand = null;
        operation = 0;
        inputWindow.value = result;
    }

    if (operation === 'squar') {
        const result = Math.sqrt(lastOperand);
        historyWindow.value += '√ ' + lastOperand + ' = ' + result + '\n';
        lastOperand = null;
        operation = 0;
        inputWindow.value = result;
    }
})