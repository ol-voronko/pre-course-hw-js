let passport = {
  name: "Petr",
  surname: "Petrov",
};
let  newPassport = Object.assign({}, passport);
newPassport = Object.assign(newPassport, { name: "Ivan" });
 

console.log(newPassport);
console.log(passport); 
