let myBirth1, myBirth2, currentYear, bYear;
let date = new Date();


function ageCalculator(bYear, currentYear) {

    currentYear = date.getFullYear();
    myBirth1 = currentYear - bYear;
    myBirth2 = currentYear - bYear + 1;

    let myBirth = [myBirth1, myBirth2];
    return myBirth;
}


document.write(ageCalculator(1978, 2023)[0]);
document.write("<hr>");
document.write(ageCalculator(1978, 2023)[1]);