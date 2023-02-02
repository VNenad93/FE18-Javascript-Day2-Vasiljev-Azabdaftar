let degree;
let pi;

pi = Math.PI;

function degreeRadian(degree) {
    let result = degree * (pi / 180);
    return result;
}

document.write(degreeRadian(90));