let passport = {
  name: "Petr",
  surname: "Petrov",
};
let copy = Object.assign({}, passport);
copy = Object.assign(copy, { name: "Ivan" });
console.log(passport);
console.log(copy);
