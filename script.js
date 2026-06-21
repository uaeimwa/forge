document.getElementById("modes").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
});
document.getElementById('hexa-input').addEventListener('input', (e) => {
    document.querySelector('.hexa').style.backgroundColor = e.target.value;
});
document.getElementById('btn-refresh-motivation').addEventListener('click', () => {
    const textElement = document.getElementById('motivation-text');
    

    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            textElement.textContent = data.slip.advice;
        })
        .catch(() => {
            textElement.textContent = "Failed to load advice. Please try again.";
        });
});
