const sumOpreator = document.querySelector(".sum")
const SubOpreator = document.querySelector(".subtract")
const mulOpreator = document.querySelector(".multiply")
const divOpreator = document.querySelector(".division")
const number1 = document.querySelector("#input1");
const number2 = document.querySelector("#input2");
const result = document.querySelector(".result")

sumOpreator.addEventListener("click", (event) => {
    const num1 = number1.value;
    const num2 = number2.value;

    const sum = parseInt(num1) + parseInt(num2);
    result.textContent = sum;
});
SubOpreator.addEventListener("click", (event) => {
    const num1 = number1.value;
    const num2 = number2.value;

    const sub = parseInt(num1) - parseInt(num2);
    result.textContent = sub;
});
mulOpreator.addEventListener("click", (event) => {
    const num1 = number1.value;
    const num2 = number2.value;

    const mul = parseInt(num1) * parseInt(num2);
    result.textContent = mul;
});
divOpreator.addEventListener("click", (event) => {
    const num1 = number1.value;
    const num2 = number2.value;

    const div = parseInt(num1) / parseInt(num2);
    result.textContent = div;
});