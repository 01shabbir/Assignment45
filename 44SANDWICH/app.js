"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function makesandwich(item) {
    console.log('\nmaking your sandwich with');
    item.forEach(function (element) { return console.log("-" + element); });
    console.log('Enjoy your sandwich !\n');
}
makesandwich(['HAm', 'cheese', 'lettuse']);
makesandwich(['bbq', 'bacon',]);
makesandwich(['turkey', 'peanut butter', 'jelly']);
