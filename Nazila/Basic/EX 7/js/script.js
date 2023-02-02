function areaVolume(width, height, depth) {
    let area = width * height;
    let volume = width * height * depth;
    let result = [area, volume];

    return result;

}

document.write(areaVolume(10, 25, 5)[0]);
document.write("<hr>");
document.write(areaVolume(10, 25, 5)[1]);