const menu = document.getElementById("Menu");
document.addEventListener("mousemove", (e) => {
    if (e.clientY <= 50) {
        menu.style.transform = "translateY(0)";
    } else {
        menu.style.transform = "translateY(-100%)";
    }
});

const rightbtn = document.querySelector("#scrolling-button-right");
const leftbtn = document.querySelector("#scrolling-button-left");
const content = document.querySelector("#container-flex");
rightbtn.addEventListener("click", (A) => {
    content.scrollLeft += 200;
});
leftbtn.addEventListener("click", (A) => {
    content.scrollLeft -= 200;
});

const colors=["red","blue","violet","green","yellow"]
const genSpaceLayer = (size, selector, maxstars, duration) => {
    const layer = []
    for (let i = 0; i < maxstars; i++) {
        const color = colors[Math.floor(Math.random()*colors.length)];
        const x = Math.floor(Math.random() * 100);
        const y = Math.floor(Math.random() * 100);
        layer.push(`${x}vw ${y}vh 0 ${color}, ${x}vw ${y-100}vh 0 ${color}`)
    }
    const container = document.querySelector(selector);
    container.style.setProperty("--space-layer", layer.join(","));
    container.style.setProperty("--size",size);
    container.style.setProperty("--duration",duration);
};
genSpaceLayer("2px",".star-layer-1", 400, "25s");
genSpaceLayer("4px",".star-layer-2", 300, "20s");
genSpaceLayer("6px",".star-layer-3", 200, "10s");