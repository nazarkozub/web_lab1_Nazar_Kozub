function countWords(text) {
    const words = text.match(/\b\w+\b/g);
    if (words === null) {
        return 0;
    } else {
        return words.length;
    }
}

document.getElementById("count-button").addEventListener("click", function() {
    const text = document.getElementById("text-input").value;
    const wordCount = countWords(text);
    document.getElementById("word-count").innerText = "Кількість слів у тексті: " + wordCount;
});

