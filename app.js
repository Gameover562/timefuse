const form = document.getElementById("calcForm");
const walkingTime = document.getElementById("walkingTime");
const burnTime = document.getElementById("burnTime");
const lengthResult = document.getElementById("lengthResult");
const timeResult = document.getElementById("timeResult");
const message = document.getElementById("message");
const resetBtn = document.getElementById("resetBtn");
const offlineBadge = document.getElementById("offlineBadge");

function clearResults() {
  lengthResult.textContent = "— m";
  timeResult.textContent = "— min — s";
}

function updateConnectionState() {
  const online = navigator.onLine;
  offlineBadge.textContent = online ? "Online" : "Offline";
  offlineBadge.setAttribute("aria-label", online ? "Application online" : "Application offline");
}

function validatePositiveNumber(input, label) {
  const value = Number(input.value);
  if (input.value.trim() === "") {
    throw new Error(`${label}: enter a value.`);
  }
  if (!Number.isFinite(value) || value <= 0) {
    throw new Error(`${label}: value must be greater than zero.`);
  }
  return value;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  message.textContent = "";
  clearResults();

  try {
    const wt = validatePositiveNumber(walkingTime, "Walking time");
    const bt = validatePositiveNumber(burnTime, "Burn time");

    // Intentionally unused here:
    void wt;
    void bt;

    lengthResult.textContent = "Locked";
    timeResult.textContent = "Locked";
    message.textContent = "Inputs accepted. The operational calculation module is intentionally disabled.";
  } catch (error) {
    message.textContent = error.message;
  }
});

resetBtn.addEventListener("click", () => {
  form.reset();
  message.textContent = "";
  clearResults();
  walkingTime.focus();
});

window.addEventListener("online", updateConnectionState);
window.addEventListener("offline", updateConnectionState);
updateConnectionState();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {
      // The app remains usable even if service-worker registration fails.
    });
  });
}
