let guest_list:string[] = ['imran Khan','nawaz sharif','amir liaqat'];
    // for(let i=0;i<guest_list.length;i++){
    //     console.log(`Dear ${guest_list[i]}), you are cordially invited to dinner at my house.`)
    // }

let absent_guest :string = 'imran khan';

let new_guest : string = 'kamran tessori'

guest_list[0] = new_guest;

for(let i=0;i<guest_list.length;i++){

    console.log(`Dear ${guest_list[i]}), you are cordially invited to dinner at my house.`)
}
console.log(`Dear ${absent_guest}), I am sorry to inform you that I can't invite you to dinner.`)

console.log('good news')