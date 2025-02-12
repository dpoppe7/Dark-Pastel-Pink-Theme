// Color dots effect
const colors = [
    "#fdb6d0", "#ffae57", "#ffd580", "#bae67e", "#5ccfe6",
    "#9cc6f4", "#a2aabc", "#aa72c5", "#d47598"
];
const symbols = [".", ":", ".", ":", "."]; 

function generateMaze() {
    const container = document.getElementById("ascii-rain");
    const cols = Math.floor(window.innerWidth / 25); 
    const rows = Math.floor(window.innerHeight / 40);
    let output = "";

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            output += `<span style="color: ${randomColor}">${randomSymbol}</span>`;
        }
    }

    container.innerHTML = output;
}

setInterval(generateMaze, 200); // Regenerates every 100ms
generateMaze(); 

// Scroll fade-in-up animation
document.addEventListener('DOMContentLoaded', function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    });

    document.querySelectorAll('.fade-in-up-trigger').forEach(element => {
        observer.observe(element);
    });
});


// Intro animation`
setTimeout(() => {
    document.getElementById("intro").style.display = "none";
    document.getElementById("main-content").classList.add("show");
}, 2000); // Matches the animation duration