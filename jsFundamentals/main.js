let name = {
  firstName: "mrityunjay",
  lastName: "Kumar",
};

let printName = function () {
  console.log(this.firstName + " " + this.lastName);
};
let printMyName = printName.bind(name);
printMyName();
