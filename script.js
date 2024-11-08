// JavaScript to calculate the nth Fibonacci number
function fibo(n) {
    if (n <= 1) return n; // Changed to return 'n' for proper Fibonacci calculation
    return fibo(n - 1) + fibo(n - 2);
}

function calculateRabbitPopulation() {
    const term = document.getElementById("term").value;
    const resultDiv = document.getElementById("result");

    // Validate input
    if (term === "" || isNaN(term) || term < 0) {
        resultDiv.textContent = "Please enter a valid positive number.";
        resultDiv.style.opacity = 1; // Ensure visibility for error message
        return;
    }

    const totalPairsOfRabbits = fibo(parseInt(term));
    resultDiv.textContent = `Number of pairs of rabbits: ${totalPairsOfRabbits}`;
    resultDiv.style.opacity = 1; // Show the result with fade-in effect
}
