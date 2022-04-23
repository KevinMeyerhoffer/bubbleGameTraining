const counterDisplay = document.querySelector("h3");
let count = 0;

const bubbleMaker = () => {
  const bubble = document.createElement("span");
  document.body.appendChild(bubble);
  bubble.classList.add("bubble");
  const size = Math.random() * 50 + 100 + "px";
  bubble.style.height = size;
  bubble.style.width = size;

  bubble.style.top = Math.random() * 100 + 50 + "%";
  bubble.style.left = Math.random() * 100 + "%";

  const plusMinus = Math.random() > 0.5 ? -1 : 1;
  bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");
  bubble.addEventListener("click", () => {
    if (count < 3) {
      count++;
      counterDisplay.textContent = count;
      bubble.remove();
    }
    if (count === 3) {
      counterDisplay.textContent = " c'est gagné";
    }
  });

  setTimeout(() => {
    bubble.remove();
  }, 8000);
};

setInterval(bubbleMaker, 3000);
