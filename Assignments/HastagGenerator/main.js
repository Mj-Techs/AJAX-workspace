const h1Handle = document.getElementById("hashtag");

function submitForm(e) {
  e.preventDefault();
  let str = e.target.string.value;
  str = str.split(" ");
  str = str.map((ele) => ele[0].toUpperCase() + ele.slice(1)).join("");
  h1Handle.textContent = `#${str}`;
}
