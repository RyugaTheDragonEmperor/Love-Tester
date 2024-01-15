async function calculateLovePercentage() {
    const yourName = document.getElementById('yourName').value;
    const partnerName = document.getElementById('partnerName').value;

    const url = `https://love-calculator.p.rapidapi.com/getPercentage?sname=${yourName}&fname=${partnerName}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '022dcbedb3msh27f93d2c42e5f76p14fa8ajsn248799dd4b45',
            'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();

        // Display the result on the page
        displayResult(`Love Percentage: ${result.percentage}%<br>Love Message: ${result.result}`);
    } catch (error) {
        console.error(error);
    }
}

function displayResult(resultText) {
    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = resultText;
}
