let passportMarried = {
  name: "Petr",
  surname: "Petrov",
  address: {
    country: "USA",
    city: "Bobryisk",
  },
};
let passportMarried2 = {
  ...passportMarried,
  ...{ married: true, address: { country: "USA", city: "Bobryisk" } },
};
passportMarried2.married = true;
console.log(passportMarried); 
console.log(passportMarried2);
