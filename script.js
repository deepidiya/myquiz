document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let score = 0;

    // Check answers
    const answers = ['a', 'c', 'a', 'b', 'b'];
    for (let i = 1; i <= answers.length; i++) {
        const selectedOption = document.querySelector(`input[name=q${i}]:checked`);
        if (selectedOption) {
            if (selectedOption.value === answers[i - 1]) {
                score++;
            }
        }
    }

    // Display results
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `<h2>Your Score: ${score} out of ${answers.length}</h2>`;
});
