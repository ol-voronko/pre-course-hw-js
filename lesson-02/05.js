let passport = {
  name: "Petr",
  surname: "Petrov",
};
let copyPassport = Object.assign({},passport);
copyPassport = Object.assign(copyPassport, { name: "Ivan" });
console.log(passport);
console.log(copyPassport);