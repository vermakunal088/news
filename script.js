function moveNoAndGrowYes() {
  const noZone = document.querySelector(".no-zone");

  const maxX = noZone.offsetWidth - noBtn.offsetWidth;
  const maxY = noZone.offsetHeight - noBtn.offsetHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;

  scale += 0.17;
  if (scale > 2 && !textChanged) {
    yesBtn.textContent = "Please 🙏 YES 😌💖";
    textChanged = true;
  }
  scale = Math.min(scale, 2);

  yesBtn.style.transform = `scale(${scale})`;
}

let textChanged = false;

const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");

let scale = 1;

// Desktop
noBtn.addEventListener("mouseenter", moveNoAndGrowYes);

// Mobile
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  moveNoAndGrowYes();
});

yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
        <div style="
          height:100vh;
          display:flex;
          justify-content:center;
          align-items:center;
          background: linear-gradient(135deg, #ff758c, #ff7eb3);
          font-family: Arial, sans-serif;
          text-align:center;
          padding:20px;
        ">
          <h1 style="color:white;font-size:32px;">
            I LOVE YOU 💕 You’re stuck with me now 😘
          </h1>
        </div>
      `;
});
