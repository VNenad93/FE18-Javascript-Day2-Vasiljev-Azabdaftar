function ATM(sum) {

    let rest;
    let hundreds = 0;
    let fiftys = 0;
    let twentys = 0;
    let tens = 0;

    if (sum >= 100) {
        hundredNotes()
        console.log(`${hundreds} * 100`)

        // if (rest >= 50) {
        //     fiftyNotes()
        //     console.log(`${fiftys} * 50`)

        //     if (rest >= 20) {

        //         twentyNotes()
        //         console.log(`${twentys} * 20`)

        //         if (rest >= 10) {

        //             tenNotes()
        //             console.log(`${tens} * 10`)
        //         }
        //     }
        // }
    }

    function hundredNotes() {
        hundreds = Math.trunc(sum / 100) 
        rest = sum - (hundreds * 100);
        fiftyNotes()
        twentyNotes()
        tenNotes()

        return [hundreds, rest]
    }

    function fiftyNotes() {
        fiftys = Math.trunc(rest / 50)
        rest = rest - (fiftys * 50)
        console.log(fiftys, rest)

        return [fiftys, rest]
    }

    function twentyNotes() {
        twentys = Math.trunc(rest / 20);
        rest = rest - (twentys * 20)

        return [twentys, rest]
    }

    function tenNotes() {
        tens = Math.trunc(rest / 10);
        rest = rest - (tens * 10)

        return [tens, rest]
    }

    return [rest, hundreds, fiftys, twentys, tens] 
}

console.log(ATM(550))