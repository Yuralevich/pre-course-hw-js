let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};
const newPass = structuredClone(passportWithAddress)
newPass.address.city = 'Bobryisk'
console.log(passportWithAddress)
console.log(newPass)