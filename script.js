const intro = document.getElementById("intro");
const surprise = document.getElementById("surprise");
const letter = document.getElementById("letter");
const openButton = document.getElementById("openButton");
const letterButton = document.getElementById("letterButton");
const closeLetter = document.getElementById("closeLetter");
const typedMessage = document.getElementById("typedMessage");

openButton.addEventListener("click", () => {
    intro.classList.add("hidden");
    surprise.classList.remove("hidden");
    makeConfetti(34);
    typeMessage();
});

letterButton.addEventListener("click", () => {
    surprise.classList.add("hidden");
    letter.classList.remove("hidden");
});

closeLetter.addEventListener("click", () => {
    letter.classList.add("hidden");
    surprise.classList.remove("hidden");
});

function typeMessage() {
    const message = typedMessage.dataset.message;
    let index = 0;
    typedMessage.textContent = "";
    const timer = setInterval(() => {
        typedMessage.textContent += message.charAt(index);
        index++;
        if (index >= message.length) clearInterval(timer);
    }, 38);
}

function makeConfetti(amount) {
    const layer = document.getElementById("confettiLayer");
    const colors = ["#b99662", "#d8c39e", "#eee1ca", "#9f8666"];
    for (let i = 0; i < amount; i++) {
        const piece = document.createElement("span");
        piece.className = "confetti";
        piece.style.left = Math.random() * 100 + "vw";
        piece.style.background = colors[Math.floor(Math.random() * colors.length)];
        piece.style.animationDelay = (Math.random() * 1.2) + "s";
        piece.style.animationDuration = (2.8 + Math.random() * 2) + "s";
        layer.appendChild(piece);
        setTimeout(() => piece.remove(), 5500);
    }
}
