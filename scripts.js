// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init() {
  let takeoffButton = document.getElementById("takeoff");
  let flightStatusEl = document.getElementById("flightStatus");
  let shuttleBackground = document.getElementById("shuttleBackground");
  let spaceShuttleHeightEl = document.getElementById("spaceShuttleHeight");
  let landingButton = document.getElementById("landing");
  let missionAbortButton = document.getElementById("missionAbort");
  let upButton = document.getElementById("up");
  let downButton = document.getElementById("down");
  let leftButton = document.getElementById("left");
  let rightButton = document.getElementById("right");

  let rocketImg = document

  takeoffButton.addEventListener("click", () => {
    let confirm = window.confirm(
      "Confirm that the shuttle is ready for takeoff"
    );
    if (confirm === true) {
      flightStatusEl.innerText = "Shuttle in flight.";
      shuttleBackground.style = "background-color: blue;";
      let currentShuttleHeight = number(spaceShuttleHeightEl.innerText);
      currentShuttleHeight += 10000;
      spaceShuttleHeightEl.innerText = currentShuttleHeight;
    }
  });

  landingButton.addEventListener("click", () => {
    window.alert("The shuttle is landing. Landing gear engaged.");
    flightStatusEl.innerText = "Shuttle has landed.";
    shuttleBackground.style = "background-color: green;";
    spaceShuttleHeightEl.innerText = 0;
  });

  missionAbortButton.addEventListener("click", () => {
    let confirm = window.confirm("Confirm that you want to abort the mission.");
    if (confirm === true) {
      flightStatusEl.innerText = "Mission aborted.";
      shuttleBackground.style = "background-color: green;";
      spaceShuttleHeightEl.innerText = 0;
    }
  });

  const navButtonCallback (event) {
    if (event.)
  }

}

window.onload = init;
