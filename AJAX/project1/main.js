const rootHandle = document.querySelector("#root");
const titleHandle = document.querySelector("#title");
const ulHandle = document.querySelector("#list");
window.onload = function () {
  const xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "https://restcountries.eu/rest/v2/all?fields=name;capital;currencies"
  );

  xhr.send();

  xhr.onload = function () {
    let data = JSON.parse(xhr.responseText);
    titleHandle.textContent = `Listing Countries - ${data.length}`;
    data.forEach((ele) => {
      const listHandle = document.createElement("li");
      listHandle.textContent = `${ele.name} -> ${ele.capital}`;
      ulHandle.appendChild(listHandle);
    });
  };
  xhr.onerror = function () {
    titleHandle.textContent = `sorry check your connection`;
  };
};
