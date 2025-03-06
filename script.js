// Vocabulary list (add more words as needed)
const vocabulary = [
    { german: "Haus", english: "House" },
    { german: "Baum", english: "Tree" },
    { german: "Wasser", english: "Water" },
    { german: "Freund", english: "Friend" },
    { german: "Schule", english: "School" }
];

let currentWord = null;

// Select random German word
document.getElementById("getWord").addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * vocabulary.length);
    currentWord = vocabulary[randomIndex];
    
    document.getElementById("germanWord").textContent = currentWord.german;
    document.getElementById("englishWord").textContent = "---";
    document.getElementById("showTranslation").disabled = false;
});

// Show English translation
document.getElementById("showTranslation").addEventListener("click", function() {
    if (currentWord) {
        document.getElementById("englishWord").textContent = currentWord.english;
    }
});
