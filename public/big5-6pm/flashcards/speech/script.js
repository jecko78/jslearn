// script.js
(function() {
    // Check for browser support at the start
    if (!('speechSynthesis' in window)) {
        console.error("Sorry, your browser doesn't support text-to-speech.");
        return;
    }

    const synth = window.speechSynthesis;
    let currentUtterance = null;
    let speakingElement = null;

    /**
     * Removes the 'speaking' class from the currently highlighted element.
     */
    const removeSpeakingClass = () => {
        if (speakingElement) {
            speakingElement.classList.remove('speaking');
            speakingElement = null;
        }
    };

    /**
     * Main handler for the click event.
     * @param {Event} event - The click event object.
     */
    const handleParagraphClick = (event) => {
        const target = event.target;

        // Ensure the clicked element is a paragraph
        if (target.tagName !== 'P') {
            return;
        }

        // If something is currently speaking, stop it.
        if (synth.speaking) {
            synth.cancel();
            // The 'onend' event of the cancelled utterance will handle class removal.
        }

        // If the clicked paragraph was the one speaking, we just stop it (toggle off).
        if (speakingElement === target) {
            // After synth.cancel() is called above, both speakingElement and currentUtterance are cleared
            // via the onend listener, so no further action is needed here.
            return;
        }

        // Create and configure a new speech utterance
        const textToSpeak = target.textContent;
        currentUtterance = new SpeechSynthesisUtterance(textToSpeak);
        
        // Add listeners to manage state and UI feedback
        currentUtterance.onstart = () => {
            removeSpeakingClass(); // Clean up any lingering class
            speakingElement = target;
            speakingElement.classList.add('speaking');
        };

        currentUtterance.onend = () => {
            removeSpeakingClass();
            currentUtterance = null;
        };
        
        currentUtterance.onerror = (e) => {
            console.error('An error occurred during speech synthesis:', e);
            removeSpeakingClass();
            currentUtterance = null;
        };

        // Speak the text
        synth.speak(currentUtterance);
    };

    // Use event delegation for performance: one listener on the document.
    document.addEventListener('click', handleParagraphClick);

})();