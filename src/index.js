module.exports = function toReadable(number) {
    const arr1 = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
    ];
    const arr2 = [
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const arr3 = [
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    const hundredsAmount = Math.floor(number / 100);
    const reminder = number % 100;
    let hundreds = "";

    if (hundredsAmount > 0) {
        hundreds = arr1[hundredsAmount] + " hundred ";
    }

    if (hundredsAmount > 0 && reminder == 0) {
        return hundreds.trim();
    }

    if (reminder <= 10) {
        return hundreds + arr1[reminder];
    }

    if (reminder < 20) {
        return hundreds + arr2[reminder - 11];
    }

    const tensAmount = Math.floor(reminder / 10);
    const onesAmount = reminder % 10;
    const tens = arr3[tensAmount - 1];
    let ones = "";

    if (onesAmount > 0) {
        ones = " " + arr1[onesAmount];
    }

    return hundreds + tens + ones;
};
