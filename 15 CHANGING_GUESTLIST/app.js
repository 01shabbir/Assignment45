var guest_list = ['imran Khan', 'nawaz sharif', 'amir liaqat'];
for (var i = 0; i < guest_list.length; i++) {
    console.log("Dear ".concat(guest_list[i], "), you are cordially invited to dinner at my house."));
}
var absent_guest = 'imran khan';
var new_guest = 'kamran tessori';
guest_list[0] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log("Dear ".concat(guest_list[i], "), you are cordially invited to dinner at my house."));
}
console.log("Dear ".concat(absent_guest, "), I am sorry to inform you that I can't invite you to dinner."));
