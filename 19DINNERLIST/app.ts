let guest_list: string[] = [`shabbir`, `Hanif`, `Milad RAza`,`Muawiyah`];
for (let i=0; i<guest_list.length; i++){
    console.log(`Dear ` + guest_list[i] + `\n\nyou are invited for a dinner tomorrow.\n\nThankyou.`);
}

let not_comming: string = `usman`;
let new_guest: string = `Asad Raza`;
guest_list[0] = new_guest 

//for (let i=0; i<guest_list.length; i++){
  //  console.log(`Dear ` + guest_list[i] + `\n\nyou are invited for a dinner tomorrow.\n\nThankyou.`);
//}  
console.log(`mr ${not_comming},is not coming for dinner tomoroww`)
guest_list.unshift(`Haji abdul habib`)
guest_list.splice(guest_list.length/2,2, "Owais Qadri" );
guest_list.push("Tahir Qadri");
// for (let i=0; i<guest_list.length; i++){
//    console.log(`Dear ` + guest_list[i] + `\n\nyou are invited for a dinner tomorrow.\n\nThankyou.`);
//}  
//console.log(`we have found a bigger dinner table so we invited more guest


console.log(`\n\nunfortunately we are out of space for two guest only.\n\n`); 
    
while(guest_list.length>2){
  let removed_guest = guest_list.pop();
console.log (`sory Dear ${removed_guest}\n\n You all still invited for a dinner tomorro.\n\nThank you.\n\n`);

guest_list.splice(0,2);

}
for (let i=0; i<guest_list.length; i++){
  console.log(`Dear ` + guest_list[i] + `\n\nyou are invited for a dinner tomorrow.\n\nThankyou.`);
}

guest_list.splice(0,2);
console.log(guest_list);



console.log(`total no of guest are:${guest_list.length}`);
