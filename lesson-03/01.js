const colors = ["синий", "черный", "зеленый", "красный", "желтый", "зеленый"];

function createColorString() {
    return colors.filter(a => {
        if (a === "черный" || a === "красный" || a === "желтый") return a
    }).join('-')
}

console.log(createColorString());   