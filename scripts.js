// Initial counts
let clickCounter = 0;
let copyCount = 2;

// Update click counter
const clickCounterSpan = document.getElementById("click-counter");

// Heart icons
const hearts = [
  "national-heart",
  "police-heart",
  "fire-heart",
  "ambulance-heart",
  "Women-child-heart",
  "helpline-heart",
  "electricity-heart",
  "brac-heart",
  "railway-heart",
];

hearts.forEach((id) => {
  const heart = document.getElementById(id);
  heart.addEventListener("click", () => {
    clickCounter++;
    clickCounterSpan.textContent = clickCounter;
    heart.innerHTML = '<i class="fa-solid fa-heart text-red-500"></i>';
  });
});

// Copy buttons
const copyButtons = [
  "national-copy-icon",
  "police-copy-icon",
  "fire-copy-icon",
  "ambulance-copy-icon",
  "Women-child-copy",
  "helpline-copy-icon",
  "electricity-copy-icon",
  "brac-copy-icon",
  "railway-copy-icon",
];
const copyCountSpan = document.getElementById("Copy-count");

copyButtons.forEach((id) => {
  const btn = document.getElementById(id);
  btn.addEventListener("click", () => {
    let numId = id
      .replace("-copy-icon", "-service-num")
      .replace("-copy", "-num");
    const numElem = document.getElementById(numId);
    const numberText = numElem ? numElem.textContent : "";

    // Copy to clipboard
    navigator.clipboard.writeText(numberText);

    // Update copy count
    copyCount++;
    copyCountSpan.textContent = copyCount;

    alert(numberText + " copied to clipboard");
  });
});

// Call buttons
const callButtons = [
  "national-call",
  "police-call",
  "fire-call",
  "ambulance-call",
  "Women-child-call",
  "helpline-service-call",
  "electricity-call",
  "brac-call",
  "railway-call",
];

const historyContent = document.getElementById("history-content");

callButtons.forEach((id) => {
  const btn = document.getElementById(id);
  btn.addEventListener("click", () => {
    const card = btn.closest(".card");
    const serviceName = card.querySelector("h3").textContent;
    const serviceNum = card.querySelector("h2").textContent;
    const time = new Date().toLocaleTimeString();

    const entry = document.createElement("div");
    entry.className = "p-2 border-b border-gray-200";
    entry.textContent = `${serviceName}: ${serviceNum} at ${time}`;
    historyContent.prepend(entry);
  });
});

// Clear history
document.getElementById("clear-button").addEventListener("click", () => {
  historyContent.innerHTML = "";
});
