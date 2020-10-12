const titleHandle = document.querySelector("#title");
const bodyHandle = document.querySelector("body");
const btn = document.querySelector("button");
const block = document.querySelector("#table");

btn.addEventListener("click", function () {
  const xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "https://restcountries.eu/rest/v2/all?fields=name;capital;currencies"
  );

  xhr.send();

  xhr.onload = function () {
    let data = JSON.parse(xhr.responseText);
    data = data.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });

    titleHandle.textContent = `Listing Countries -${data.length}`;

    // table generator
    const tableHandle = document.createElement("table");
    block.appendChild(tableHandle);
    tableHandle.setAttribute("border", "3");
    tableHandle.setAttribute("id", "box");

    // table header generator
    const header = ["Country", "Capital", "Currency"];
    for (const level of header) {
      const thHandle = document.createElement("th");
      thHandle.textContent = level;
      tableHandle.appendChild(thHandle);
    }

    // table data generator
    data.forEach((ele) => {
      const trHandle = document.createElement("tr");
      const tdHandle = document.createElement("td");
      const tdHandle1 = document.createElement("td");
      const tdHandle2 = document.createElement("td");
      tdHandle.textContent = ele.name;
      tdHandle1.textContent = ele.capital;

      ele.currencies.forEach((ele) => {
        tdHandle2.textContent = ele.name;
      });

      tableHandle.appendChild(trHandle);
      tableHandle.appendChild(tdHandle);
      tableHandle.appendChild(tdHandle1);
      tableHandle.appendChild(tdHandle2);
    });

    bodyHandle.removeChild(btn);
  };

  // xhr.onerror = function () {
  //   titleHandle.textContent = `sorry check your connection`;
  // };
});
