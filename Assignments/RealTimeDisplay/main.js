const h2Handle = document.querySelector("h2");
const input = document.getElementById("input");
function keyUp() {
  h2Handle.textContent = input.value;
}
