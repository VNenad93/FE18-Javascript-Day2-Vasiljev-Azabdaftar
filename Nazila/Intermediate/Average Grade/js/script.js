function averageGrade(math, physic, english) {
    let sum;
    let average;

    if (typeof math == "number" &&
        typeof physic == "number" &&
        typeof english == "number") {
        sum = math + physic + english;
        average = sum / 3;
        let result = [sum, average]
        return result;
    } else {
        document.write("Your Input is Wrong!");
    }


}

//document.write(averageGrade(3, 4, 5)[0]); // Your Input is Wrong

document.write(averageGrade(3, 4, 5)[0]);
document.write("<hr>")
document.write(averageGrade(3, 4, 5)[1]);