let passport = {
    name: "Petr",
    surname: "Petrov",
};
const deepPass = structuredClone(passport)
deepPass.name = "Ivan"
console.log(passport.name)
console.log(deepPass.name)