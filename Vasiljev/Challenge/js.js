function ATM(sum) {

    let rest;

    let hundreds;
    let fiftys;
    let twentys;
    let tens;

    if (sum > 100) {

        hundreds = Math.trunc(sum / 100) // Determening how many hunreds

        rest = sum - (hundreds * 100); // getting the remaining rest

        if (rest > 50) {

            fiftys = Math.trunc(rest / 50) // Determening how many fiftys
    
            rest = rest - (fiftys * 50)

            if (rest > 20) {

                twentys = Math.trunc(rest / 20)

                rest = rest - (twentys * 20)

                return [rest]
            }
        }
    }

    return hundreds, fiftys, twentys
}

console.log(ATM(590))


console.log(320 / 100)

// hundreds = Math.trunc(sum / 100) // Determening how many hunreds

// rest = sum - (hundreds * 100); // getting the remaining rest