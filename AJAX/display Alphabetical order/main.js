const h1Handle = document.querySelector("#title");
const ulHandle = document.querySelector("#list");
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

    h1Handle.textContent = `Listing Countries - ${data.length}`;
    // putting all country name as a key value pair in the object.
    for (const country of data) {
      if (alphabet.hasOwnProperty(country.name[0])) {
        alphabet[country.name[0]].push(country.name);
      } else {
        alphabet[country.name[0]] = new Array();
        alphabet[country.name[0]].push(country.name);
      }
    }

    // iterating my alphabet object
    for (const key in alphabet) {
      const h1Tag = document.createElement("h1");
      h1Tag.textContent = key;
      ulHandle.appendChild(h1Tag);
      alphabet[key].forEach((ele) => {
        const liHandle = document.createElement("li");
        liHandle.textContent = ele;
        ulHandle.appendChild(liHandle);
      });
    }
  };
};
