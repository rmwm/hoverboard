const container = document.getElementById("container");
const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];
const squares = 500;

for (let i = 0; i < squares; i++){
    const squares = document.createElement("div");
    squares.classList.add(
        "bg-[#1d1d1d]",
        "shadow-[0_0_2px_#000]",
        "h-4",
        "w-4",
        "m-0.5",
        "transition",
        "duration-2000",
        "ease-linear",
        "hover:duration-0"
    );

    squares.addEventListener("mouseover", () => setcolor(squares));

     squares.addEventListener("mouseout", () => removecolor(squares));

     container.appendChild(squares);
}

function setcolor(element) {
    const color = getrandomcolor();
    element.style.background = color;
    element.style.boxshadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removecolor(element){
    element.style.background = "#1d1d1d";
    element.style.boxshadow = "0 0 2px #000"
}

function getrandomcolor() {
    return colors[Math.floor(Math.random() * colors.length)];
}