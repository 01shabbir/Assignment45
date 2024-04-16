import { it } from "node:test";

function makesandwich (item:string[]){
    console.log('\nmaking your sandwich with');

    item.forEach(element => console.log("-"+ element));

    console.log('Enjoy your sandwich !\n')
}



makesandwich(['HAm','cheese','lettuse'])

makesandwich(['bbq','bacon',]);

makesandwich(['turkey','peanut butter','jelly']);