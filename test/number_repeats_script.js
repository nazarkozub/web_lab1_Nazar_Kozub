let numbersSet = new Set();

function checkNumber() {
    let numberInput = document.getElementById("numberInput");
    let messageDiv = document.getElementById("message");
    
    let number = parseFloat(numberInput.value);
    if (isNaN(number)) {
        messageDiv.textContent = "Некоректне введення. Будь ласка, введіть число.";
    } else {
        if (numbersSet.has(number)) {
            messageDiv.textContent = "Таке число вже введено.";
        } else {
            numbersSet.add(number);
            messageDiv.textContent = "Число додано до набору.";
        }
    }
    numberInput.value = "";
}
