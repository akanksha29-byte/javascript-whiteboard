import "./styles.css";

function _(element) {
  return document.querySelector(element);
}

const canvas = _("#canvas-container");
const ctx = canvas.getContext("2d");
window.addEventListener("load", () => {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
});

function draw(e) {
  ctx.lineTo(e.offsetX, e.offsetY); //creating line as per pointer
  ctx.stroke(); //filling line with color
}

canvas.addEventListener("mousemove", draw);
