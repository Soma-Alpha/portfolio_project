let panels = document.querySelectorAll(".panel");
let active = document.querySelector(".active");
let check_weather = document.querySelector("#check_weather");
let check;
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    RemoveActiveClasses();
    panel.classList.add("active");
    console.log(panel);
  });
});

function RemoveActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

giphy_search.addEventListener("click", () => {
  window.location.assign("./JavaScript_APIs/index.html");
});

check_weather.addEventListener("click", () => {
  window.location.assign("./Weather1-App/index.html");
});

git_user.addEventListener("click", () => {
  window.location.assign("./user_search/index.html");
});

count_down.addEventListener("click", () => {
  window.location.assign("./new_year_countdown/index.html");
});
