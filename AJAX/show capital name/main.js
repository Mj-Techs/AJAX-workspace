const h1Handle = document.querySelector("#title");
const ulHandle = document.querySelector("#list");
window.onload = function () {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://restcountries.eu/rest/v2/all?fields=name;capital");

  xhr.send();

  xhr.onload = function () {
    let data = JSON.parse(xhr.responseText);
    data = data.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });

    h1Handle.textContent = `Listing Countries-${data.length}`;
    data.forEach((ele) => {
      const liHandle = document.createElement("li");
      const btn = document.createElement("button");
      btn.textContent = "show";

      btn.addEventListener("click", function () {
        alert(`Capital - ${ele.capital}`);
      });
      liHandle.textContent = `${ele.name} `;
      liHandle.append(btn);
      ulHandle.appendChild(liHandle);
    });
  };
};
