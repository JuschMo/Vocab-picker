<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vocabulary Tool</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            background-color: #f4f4f4;
            margin: 0;
            padding: 20px;
        }
        .container {
            background: white;
            padding: 20px;
            max-width: 400px;
            margin: auto;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        button {
            padding: 10px;
            margin: 10px;
            font-size: 16px;
            cursor: pointer;
        }
        h2, h3 {
            color: #333;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>German Vocabulary Trainer</h1>
        <p>Click "Get Word" to see a random German word.</p>
        <button id="getWord">Get Word</button>
        <h2 id="germanWord">---</h2>
        <button id="showTranslation" disabled>Show Translation</button>
        <h3 id="englishWord">---</h3>
    </div>

    <script>
        const vocabulary = [
            { german: "begabt", english: "talented" },
            { german: "berühmt", english: "famous" },
            { german: "bescheiden", english: "modest" },
            { german: "charismatisch", english: "charismatic" },
            { german: "erfolgreich", english: "successful" },
            { german: "großzügig", english: "generous" },
            { german: "originell", english: "original" },
            { german: "reich", english: "rich" },
            { german: "selbstbewusst", english: "self-confident" },
            { german: "selbstlos", english: "selfless" },
            { german: "Er/Sie ist nicht …", english: "He/She is not …" },
            { german: "arrogant", english: "arrogant" },
            { german: "launisch", english: "moody" },
            { german: "nervig", english: "annoying" },
            { german: "der Wissenschaftler / die Wissenschaftlerin", english: "Scientist" },
            { german: "der Aktivist / die Aktivistin", english: "Activist" },
            { german: "der Politiker / die Politikerin", english: "Politician" },
            { german: "der Künstler / die Künstlerin", english: "Artist" },
            { german: "der Musiker / die Musikerin", english: "Musician" },
            { german: "der Schauspieler / die Schauspielerin", english: "Actor/Actress" },
            { german: "der Schriftsteller / die Schriftstellerin", english: "Writer/Author" },
            { german: "der Sportler / die Sportlerin", english: "Athlete" },
            { german: "der Unternehmer / die Unternehmerin", english: "Entrepreneur" },
            { german: "der Influencer / die Influencerin", english: "Influencer" },
            { german: "der Fußballspieler / die Fußballspielerin …", english: "Football player (or other sports)" },
            { german: "der Olympiasieger / die Olympiasiegerin", english: "Olympic champion" },
            { german: "der Erfinder / die Erfinderin", english: "Inventor" }
        ];

        let currentWord = null;

        document.getElementById("getWord").addEventListener("click", function() {
            const randomIndex = Math.floor(Math.random() * vocabulary.length);
            currentWord = vocabulary[randomIndex];
            
            document.getElementById("germanWord").textContent = currentWord.german;
            document.getElementById("englishWord").textContent = "---";
            document.getElementById("showTranslation").disabled = false;
        });

        document.getElementById("showTranslation").addEventListener("click", function() {
            if (currentWord) {
                document.getElementById("englishWord").textContent = currentWord.english;
            }
        });
    </script>
</body>
</html>
