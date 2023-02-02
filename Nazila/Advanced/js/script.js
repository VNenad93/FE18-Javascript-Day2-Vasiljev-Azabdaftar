function timeConvert(timeMinute) {

    let hour = Math.floor(timeMinute / 60);
    let min = Math.floor(timeMinute % 60);
    let text = `${timeMinute} minutes = ${hour} hour(s) and ${min} minute(s). `

    return text;
}

document.write(timeConvert(200));