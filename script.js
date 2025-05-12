document.addEventListener('DOMContentLoaded', () => {
    const joinButton = document.getElementById('joinButton');

    if (joinButton) {
        joinButton.addEventListener('click', () => {
            const messages = [
                "Excellent choice! Prepare for eternal giggles and questionable life decisions!",
                "You're in! We've already assigned you a spirit animal. It's a slightly confused platypus.",
                "Welcome, newest acolyte! Your complimentary tinfoil hat is in the mail.",
                "One of us! One of us! Don't worry, the chanting is optional... mostly.",
                "Congratulations! You've unlocked the 'Advanced Silliness' achievement."
            ];
            const randomIndex = Math.floor(Math.random() * messages.length);
            alert(messages[randomIndex]);

            // Optional: Add some visual flair on click
            joinButton.textContent = "You're One of Us Now!";
            joinButton.style.backgroundColor = '#00ff00'; // Neon green
            joinButton.style.color = '#1a1a1a';
            joinButton.disabled = true; // Prevent multiple clicks
        });
    }

    // Little console message for those who dare to inspect
    console.log("Psst... the Great Space Hamster is watching. And he's judging your browser history.");
    console.log("Remember, the sacred password is 'squeegee'. Don't tell anyone.");

    // Make the header paragraph text change color randomly for extra fun
    const headerParagraph = document.querySelector('header p');
    if (headerParagraph) {
        const colors = ['#ff00ff', '#00ff00', '#ffff00', '#00ffff', '#ff69b4'];
        setInterval(() => {
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            headerParagraph.style.color = randomColor;
            headerParagraph.style.transition = 'color 0.5s ease-in-out';
        }, 2000);
    }
});
