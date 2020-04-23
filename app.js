const btnLetsGo = document.getElementById("go");
const background = document.querySelector(".bg");
const vehicle = document.querySelector(".car");
let buttonFlagGo = true;

btnLetsGo.addEventListener("click", () => {
  startStopBtn();
});

const startStopBtn = () => {
  if (buttonFlagGo) {
    background.style.animation = "animateBackground 10s linear infinite";
    vehicle.style.animation = "animateVehicleGo 2s";
    btnLetsGo.classList.remove("go");
    buttonFlagGo = !buttonFlagGo;
    setTimeout(
      (showStopBtn = () => {
        btnLetsGo.classList.add("stop");
        btnLetsGo.innerHTML = "STOP";
      }),
      2000
    );
  } else {
    if (!buttonFlagGo) {
      background.style.animation = "";
      vehicle.style.animation = "";
      btnLetsGo.classList.remove("stop");
      btnLetsGo.classList.add("go");
      btnLetsGo.innerHTML = "LET'S GO!!";
      buttonFlagGo = !buttonFlagGo;
      console.log(buttonFlagGo);
    }
  }
};
