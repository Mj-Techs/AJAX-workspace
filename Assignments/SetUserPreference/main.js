const color = ["red", "yellow", "blue", "reset"];
const body = document.querySelector("body");
const form = document.querySelector("form");

function submitForm(e) {
  e.preventDefault();
}

// pushing color in our localStorage
localStorage.setItem("color", JSON.stringify(color));

color.forEach((ele) => {
  const btn = document.createElement("button");
  btn.textContent = ele;
  form.appendChild(btn);

  btn.addEventListener("click", function () {
    if (ele !== "reset") {
      localStorage.setItem("background", ele);

      const parsedColor = JSON.parse(localStorage.getItem("color"));
      const index = parsedColor.indexOf(ele);
      body.style.backgroundColor = parsedColor[index];
    } else if (ele === "reset") {
      localStorage.setItem("background", ele);
      body.style.backgroundColor = "white";
    }
  });
});
// initialize our background color
body.style.backgroundColor = localStorage.getItem("background");
console.log(typeof localStorage);
