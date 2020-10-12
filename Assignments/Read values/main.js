const h2Handle = document.querySelector("h2");
const phandle = document.querySelector("p");

const user = {
  name: "adam",
  age: "19",
  contact: { user_name: "adam_rush", email: "adam@gmail.com" },
};

localStorage.setItem("user", JSON.stringify(user));

const parseduser = JSON.parse(localStorage.getItem("user"));
h2Handle.textContent = parseduser.name;

const details = [];
details.push(parseduser.age);

const parsedContact = parseduser.contact;

for (const key in parsedContact) {
  details.push(parsedContact[key]);
}
phandle.textContent = details.join(",");
