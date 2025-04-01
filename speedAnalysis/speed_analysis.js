// Define variables
    let testText = "The quick brown fox jumps over the lazy dog.";
    let startTime, endTime;
    
    // Get DOM elements
    const inputTextEl = document.getElementById("inputText");
    const userInputEl = document.getElementById("userInput");
    const outputEl = document.getElementById("output");
    const startBtn = document.getElementById("startBtn");
    const endBtn = document.getElementById("endBtn");
    
    // Add event listeners
    startBtn.addEventListener("click", startTest);
    endBtn.addEventListener("click", endTest);
    
    function startTest() {
        // Set the test text
        inputTextEl.value = testText;
        
        // Reset user input
        userInputEl.value = "";
        userInputEl.readOnly = false;
        userInputEl.focus();
        
        // Clear previous results
        outputEl.innerHTML = "";
        
        // Start the timer
        startTime = new Date().getTime();
        
        // Show end button, hide start button
        startBtn.style.display = "none";
        endBtn.style.display = "inline-block";
    }
    
    function endTest() {
        // Record end time
        endTime = new Date().getTime();
        
        // Disable user input
        userInputEl.readOnly = true;
        
        // Calculate time elapsed (in seconds)
        const timeElapsed = (endTime - startTime) / 1000;
        
        // Get user's typed text
        const userTypedText = userInputEl.value;
        
        // Count words (removing empty strings)
        const typedWords = userTypedText.split(/\s+/).filter(word => word !== "").length;
        
        // Calculate WPM
        let wpm = 0;
        if (timeElapsed > 0 && typedWords > 0) {
            wpm = Math.round((typedWords / timeElapsed) * 60);
        }
        
        // Calculate accuracy
        const originalWords = testText.trim().split(/\s+/);
        const userWords = userTypedText.trim().split(/\s+/);
        let correctWords = 0;
        
        for (let i = 0; i < Math.min(originalWords.length, userWords.length); i++) {
            if (originalWords[i] === userWords[i]) {
                correctWords++;
            }
        }
        
        const accuracy = originalWords.length > 0 ? 
            Math.round((correctWords / originalWords.length) * 100) : 0;
        
        // Display results
        outputEl.innerHTML = `
            <h2>Typing Test Results:</h2>
            <p>Words Typed: ${typedWords}</p>
            <p>Time Elapsed: ${timeElapsed.toFixed(2)} seconds</p>
            <p>Words Per Minute (WPM): ${wpm}</p>
            <p>Accuracy: ${accuracy}%</p>
        `;
        
        // Show start button, hide end button
        startBtn.style.display = "inline-block";
        endBtn.style.display = "none";
    }