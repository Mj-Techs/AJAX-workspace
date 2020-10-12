const bodyHandle = document.querySelector("body");
const h1Handle = document.querySelector("#title");
const ulHandle = document.querySelector("#list");
const block = document.querySelector("#block");
const alphabet = {};
window.onload = function () {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://restcountries.eu/rest/v2/all?fields=name");

  xhr.send();

  xhr.onload = function () {
    let data = JSON.parse(xhr.responseText);
    data = data.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });

    // putting all country name as a key value pair in the object.
    for (const country of data) {
      if (alphabet.hasOwnProperty(country.name[0])) {
        alphabet[country.name[0]].push(country.name);
      } else {
        alphabet[country.name[0]] = new Array();
        alphabet[country.name[0]].push(country.name);
      }
    }

    //Anchor tag generator
    for (const key in alphabet) {
      const anchor = document.createElement("a");
      anchor.setAttribute("href", "./index.html");
      anchor.textContent = key;
      block.appendChild(anchor);

      //performing eventListener on Anchor tag
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        ulHandle.innerHTML = ""; //clear all the content of ul before printing next list.
        h1Handle.textContent = `Listing ${alphabet[key].length} countries`;

        // list Generator
        alphabet[key].forEach((ele) => {
          const liHandle = document.createElement("li");
          liHandle.textContent = ele;
          ulHandle.appendChild(liHandle);
        });
      });
    }
  };
};
