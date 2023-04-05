const firstNumberButton = document.getElementById("firstNumber");
const secondNumberButton = document.getElementById("secondNumber");

const action = document.getElementById("action");
const result = document.getElementById("result");

let firstNum, secondNum, actionType;

const handleClick = (event) => {
  result.innerHTML = "";

  if (event.target.id === "firstNumber") {
    firstNum = parseInt(prompt("Enter first number"));

    if (isNaN(firstNum)) {
      alert("Please enter a valid number");
      return;
    }

    firstNumberButton.innerText = firstNum;
  } else if (event.target.id === "secondNumber") {
    secondNum = parseInt(prompt("Enter second number"));

    if (isNaN(secondNum)) {
      alert("Please enter a valid number");
      return;
    }

    secondNumberButton.innerText = secondNum;
  }

  let actionType = action.value;
  let actionResult;

  if (firstNum && secondNum && actionType) {
    if (actionType === "add") {
      actionResult = " = " + (firstNum + secondNum);
    } else if (actionType === "sub") {
      actionResult = " = " + (firstNum - secondNum);
    } else if (actionType === "mul") {
      actionResult = " = " + firstNum * secondNum;
    } else if (actionType === "div") {
      actionResult = " = " + firstNum / secondNum;
    }

    result.innerHTML = actionResult;
    alert("Result: " + actionResult);
  }
};

firstNumberButton.addEventListener("click", handleClick);
secondNumberButton.addEventListener("click", handleClick);

action.addEventListener("change", handleClick);
