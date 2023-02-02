function converter(num) {
    let hours = Math.trunc(num / 60);
    let minutes = num - (hours * 60);

    if (hours === 1) {
        return `${num} minutes = ${hours} hour and ${minutes} minutes`
    } else if (hours < 1) {
        return `${num} minutes = is ${minutes} minutes`
    } else if (num % 60 === 0) {
        return `It's exactly ${hours} hours`
    } else  {
        return `${num} minutes = ${hours} hours and ${minutes} minutes`
    }
}

 
console.log(converter(60))