function describe_city(city, country) {
    if (country === void 0) { country = 'defualt country.'; }
    console.log("".concat(city, "is in ").concat(country));
}
describe_city('karachi', 'pakistan');
describe_city('tokyo', 'japan');
describe_city('paris');
