// create onload handler

window.onload = () => {
  main();
};

function main() {
  const root = document.getElementById("root");
  const btn = document.getElementById("change-btn");

  btn.addEventListener("click", function () {
    const bgColor = GenerateColor();
    root.style.backgroundColor = bgColor;
  });
}

// random color generator function
function GenerateColor() {
  // black(0, 0, 0) white(255, 255, 255)
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `rgb(${red}, ${green}, ${blue})`;
}
