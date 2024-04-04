

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

let x = getRandomNum(20);
let y = getRandomNum(10);
let z = getRandomNum(13);

// Use averageThreeNumbers function to find average of x, y, and z
let avg = averageThreeNumbers(x, y, z);

// Use createSentence function to construct a sentence
let animal = "cat"; // Change "cat" to your favorite animal
let sentence = createSentence(avg, animal);

// Output the sentence
console.log(sentence);