let rest;
let hundreds = 0;
let fiftys = 0;
let twentys = 0;
let tens = 0;

function ATM(sum) {

    if (sum < 100) {
        rest = sum;
    }

    if (sum >= 100) {
        hundredNotes()
    } else if (sum < 100 && sum >= 50) {
        fiftyNotes()
    } else if (sum < 50 && sum >= 20) {
        twentyNotes()
    } else {
        tenNotes()
    }

    function hundredNotes() {
        hundreds = Math.trunc(sum / 100) 
        rest = sum - (hundreds * 100);
        console.log(`${hundreds} * 100`)

        if (rest >= 50) {
            fiftyNotes();
        } else if (rest >= 20) {
            twentyNotes();
        } else if (rest >= 10) {
            tenNotes()
        }

        return [hundreds, rest]
    }

    function fiftyNotes() {
        fiftys = Math.trunc(rest / 50)
        rest = rest - (fiftys * 50)
        console.log(`${fiftys} * 50`)

        if (rest >= 20) {
            twentyNotes()
        } else if (rest >= 10) {
            tenNotes();
        }

        return [fiftys, rest]
    }

    function twentyNotes() {
        twentys = Math.trunc(rest / 20);
        rest = rest - (twentys * 20)
        console.log(`${twentys} * 20`)

        if(rest >= 10) {
            tenNotes()
        }

        return [twentys, rest]
    }

    function tenNotes() {
        tens = Math.trunc(rest / 10);
        rest = rest - (tens * 10)
        console.log(`${tens} * 10`)

        return [tens, rest]
    }

    return [rest, hundreds, fiftys, twentys, tens] 
}

console.log(ATM(130))