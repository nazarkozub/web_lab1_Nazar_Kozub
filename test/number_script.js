function countOccurrences() {
    const numbersInput = document.getElementById("numbersInput").value;
    const digitInput = document.getElementById("digitInput").value;

    const numbers = numbersInput.split(',').map(Number);
    const digit = parseInt(digitInput);

    let count = 0;

    for (let i = 0; i < numbers.length; i++) {
        const numberString = numbers[i].toString();
        for (let j = 0; j < numberString.length; j++) {
            if (parseInt(numberString[j]) === digit) {
                count++;
            }
        }
    }

    const resultElement = document.getElementById("result");
    resultElement.textContent = `Цифра ${digit} зустрічається ${count} рази.`;
}
