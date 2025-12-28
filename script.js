document.body.style.margin = "0";
document.body.style.padding = "0";
document.body.style.height = "100vh";
document.body.style.backgroundColor = "#fff";

const container = document.querySelector(".container");
container.style.display = "grid";
container.style.gridTemplateColumns = "1fr 1fr";
container.style.gridTemplateRows = "1fr 1fr";
container.style.height = "100vh";

const Quads = document.getElementsByClassName("Quadrant");
const Q1 = document.getElementById("Q1");
const Q2 = document.getElementById("Q2");
const Q3 = document.getElementById("Q3");
const Q4 = document.getElementById("Q4");

for (let i = 0; i < Quads.length; i++) {
    Quads[i].style.display = "flex";
    Quads[i].style.alignItems = "center";
    Quads[i].style.justifyContent = "center";
    Quads[i].style.fontSize = "100px"; 
    Quads[i].style.borderRadius = "0px";
    Quads[i].style.color = "transparent";
    Quads[i].style.transition = "all 0.3s ease";
}

Q1.addEventListener("mouseenter", function () {
    Q1.style.backgroundColor = "#059bff";
    Q1.style.color = "black";
    Q1.textContent = "Q1";
    Q1.style.cursor = "pointer";
    Q1.style.boxShadow = "4px 4px 18px #059bff";
    Q1.style.zIndex = "5";
});
Q1.addEventListener("mouseleave", function () {
    Q1.style.backgroundColor = "white";
    Q1.style.color = "transparent";
    Q1.style.boxShadow = "none";
});

Q2.addEventListener("mouseenter", function () {
    Q2.style.backgroundColor = "#ff3305";
    Q2.style.color = "black";
    Q2.textContent = "Q2";
    Q2.style.cursor = "grab";
    Q2.style.boxShadow = "-4px 4px 18px #ff3305";
});
Q2.addEventListener("mouseleave", function () {
    Q2.style.backgroundColor = "white";
    Q2.style.color = "transparent";
    Q2.style.boxShadow = "none";
});

Q3.addEventListener("mouseenter", function () {
    Q3.style.backgroundColor = "#05ff16";
    Q3.style.color = "black";
    Q3.textContent = "Q3";
    Q3.style.cursor = "crosshair";
    Q3.style.boxShadow = "4px -4px 18px #05ff16";
});
Q3.addEventListener("mouseleave", function () {
    Q3.style.backgroundColor = "white";
    Q3.style.color = "transparent";
    Q3.style.boxShadow = "none";
});

Q4.addEventListener("mouseenter", function () {
    Q4.style.backgroundColor = "#d5ff04";
    Q4.style.color = "black";
    Q4.textContent = "Q4";
    Q4.style.cursor = "nwse-resize";
    Q4.style.boxShadow = "-4px -4px 18px #d5ff04";
});
Q4.addEventListener("mouseleave", function () {
    Q4.style.backgroundColor = "white";
    Q4.style.color = "transparent";
    Q4.style.boxShadow = "none";
});
