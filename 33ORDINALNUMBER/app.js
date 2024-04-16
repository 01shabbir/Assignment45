var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, number_1 = number; _i < number_1.length; _i++) {
    var num = number_1[_i];
    var ordinalEnding = void 0;
    if (num === 1) {
        ordinalEnding = "st";
    }
    else if (num === 2) {
        ordinalEnding = "nd";
    }
    else if (num === 3) {
        ordinalEnding = "red";
    }
    else {
        ordinalEnding = "th";
    }
    console.log("".concat(num).concat(ordinalEnding));
}
