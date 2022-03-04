const numberHash = {
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true,
    8: true,
    9: true,
    0: true
}
const operatorChars = ["-", "+", "/", "*"];

const add = (num1, num2) => num1 + num2;

const subtract = (num1, num2) => num1 - num2;

const divide = (num1, num2) => num1 / num2;

const multiply = (num1, num2) => num1 * num2;

const findOperator = (input) => {
    let operatorIndex = -1;
    let searchIndex = 0;
    while (operatorIndex === -1 && searchIndex < operatorChars.length) {
        operatorIndex = input.innerText.indexOf(operatorChars[searchIndex])
        searchIndex++;
    }
    return operatorIndex;
}

const numberPanel = document.querySelector(".leftPanel");
const input = document.getElementById("input");

numberPanel.addEventListener("click", event => {

    if (event.target.innerText === "C") input.innerHTML = "";
    else if (event.target.innerText.length === 1) {
        input.innerText += event.target.innerText;
    }

})

const operators = document.querySelector(".operators");

operators.addEventListener("click", event => {

    if (event.target.innerText.length === 1) {
        const operatorIndex = findOperator(input);
        if (operatorIndex === -1) input.innerText += event.target.innerText;
    }
})

const equalBtn = document.querySelector(".equal");

equalBtn.addEventListener("click", () => {

    const operatorIndex = findOperator(input);
    if (operatorIndex > -1 && input.innerText[operatorIndex - 1] in numberHash && input.innerText[input.innerText.length - 1] in numberHash) {
        const num1 = parseFloat(input.innerText.slice(0, operatorIndex));
        const num2 = parseFloat(input.innerText.slice(operatorIndex + 1));
        switch (input.innerText[operatorIndex]) {
            case "-":
                input.innerText = subtract(num1, num2);
                break;
            case "+":
                input.innerText = add(num1, num2);
                break;
            case "/":
                input.innerText = divide(num1, num2);
                break;
            case "*":
                input.innerText = multiply(num1, num2);
                break;
        }
    }
})


