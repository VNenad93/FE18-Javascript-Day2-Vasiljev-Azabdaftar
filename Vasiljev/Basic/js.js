// ex 1

let temperature = Math.floor(Math.random() * 30) - 5

if (temperature < 11) {
    console.log('Cold')
} else {
    console.log('Moderate')
}

//ex 2

let favoriteFoods = ['Pizza', 'Hamburger', 'ice cream', 'chocolate']

let choosing = favoriteFoods[Math.floor(Math.random() * favoriteFoods.length)]


//ex 3

function crystalGazer(children, partner, location, job) {
    console.log(`You will be a ${job} in ${location}, and married to ${partner} with ${children} children`)
}

crystalGazer(3, 'Josefine', 'St polten', 'Truck driver')

//ex 4

function ageCalc(birthYear, currYear) {
    console.log(currYear - birthYear)
}

ageCalc(1993, 2023)

//ex 5

function calcImproved(birthYear) {
    let currYear = new Date().getFullYear()
    console.log(currYear - birthYear)
}

calcImproved(1993)

//ex 6

function radianConv(deg) {
    let conversion = deg * (Math.PI / 180)
    console.log(conversion)
}

radianConv(90)

//ex 7

function volumeCalc(width, height, depth) {
    let area = width * height;
    let volume = width * height * depth;

    return [area, volume]
}


console.log(volumeCalc(2, 7, 5))