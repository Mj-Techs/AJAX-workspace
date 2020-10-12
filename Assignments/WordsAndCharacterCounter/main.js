const pHandle = document.querySelector("p");

const text = document.getElementById("textarea");
function keyUp() {
  let char = text.value.length;
  const words = text.value.split(" ").length;
  pHandle.textContent = `Words-${words},characters-${char}`;
}
