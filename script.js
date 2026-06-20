document.getElementById("modes").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
});
document.getElementById("hexa-input").addEventListener("input", (e) => {
    document.querySelectorAll(".luxury-feature-card").forEach(card => {
        card.style.backgroundColor = e.target.value;
    });
});

async function getAdviceData() {
console.log("hi")
    const response = await fetch("https://api.adviceslip.com/advice");
console.log("hi")
    const data = await response.json();
    console.log(data);
    const p = document.getElementById("motivation-text")
    console.log(data['message'])
    p.src = data['message']
 
}
getAdviceData()