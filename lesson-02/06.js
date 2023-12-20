let passportWithAddress = {
  name: "Petr",
  surname: "Petrov",
  address: {
    country: "USA",
    city: "LA",
  },
};
let passportWithAddress2 = { ...passportWithAddress, ...{ address: {country:"USA", city: "Bobryisk" } } };
 
console.log(passportWithAddress2.address.city);
console.log(passportWithAddress.address.city);