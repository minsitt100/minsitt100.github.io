function averageThreeNumbers(a, b, c) {
    let sum = a + b + c;
    let divisor = 3;
    return sum / divisor;
}

function createSentence(num, noun) {
    return "On average, a Berkeley student has " + String(num) + " " + noun;
}

function getRandomNum(max) {
    const minNumber = 0
    const maxNumber = Math.floor(max)
    return Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
}