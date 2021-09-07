const operators = document.getElementsByClassName('operator');
const value = document.getElementsByClassName('form');

const benefit = document.getElementById('result');

let firstNumber = value[0];
let secondNumber = value[1];

function getFirstNumber(){
    return Number(firstNumber.value);
}
function getSecondNumber(){
    return Number(secondNumber.value);
}
function getResultOfFoldingNumbers(){
    let result = getFirstNumber() + getSecondNumber();
    
    return benefit.value = result;
}
function getResultOfSubtractingNumbers(){
    let result = getFirstNumber() - getSecondNumber();

    return benefit.value = result;
}
function getResultOfMultiplyingNumbers(){
    let result = getFirstNumber() * getSecondNumber();

    return benefit.value = result;
}
function getResultOfDividingNumbers(){
    let result = getFirstNumber() / getSecondNumber();

    return benefit.value = result;
}
function getTheSquareOfNumbers(){
    let result = getFirstNumber() ** getSecondNumber();

    return benefit.value = result;
}

operators[0].addEventListener('click', getResultOfFoldingNumbers);
operators[1].addEventListener('click', getResultOfSubtractingNumbers);
operators[2].addEventListener('click', getResultOfMultiplyingNumbers);
operators[3].addEventListener('click', getResultOfDividingNumbers);
operators[4].addEventListener('click', getTheSquareOfNumbers);

