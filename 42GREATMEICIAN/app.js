var megician = ['Harry Potter', 'Hermion Granger', 'Albus Demledore'];
function make_great(megicianArray) {
    for (var i = 0; i < megicianArray.length; i++) {
        megician[i] = 'the Great ' + megicianArray[i];
    }
}
function show_magician(megician) {
    megician.forEach(function (element) {
        console.log(element);
    });
}
make_great(megician);
show_magician(megician);
