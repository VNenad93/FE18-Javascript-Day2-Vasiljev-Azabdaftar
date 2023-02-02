let myBirth1, myBirth2, currentYear, bYear;

let date = new Date();
currentYear = date.getFullYear();

function ageCalculator(bYear, currentYear) {


    myBirth1 = currentYear - bYear;
    myBirth2 = currentYear - bYear + 1;
    let myBirth = [myBirth1, myBirth2];
    return myBirth;
}


document.write(ageCalculator(2009, currentYear)[0]);
document.write("<hr>");
document.write(ageCalculator(2009, currentYear)[1]);