const colors = ["синий", "черный", "зеленый", "красный", "желтый", "зеленый"];

function createColorString() {
    return colors.filter(a => a === "черный" || a === "красный" || a === "желтый").join('-')
}

console.log(createColorString());   