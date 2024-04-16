let magician:string[] = ['Harry Potter','Hermion Granger','Albus Demledore']

function copyArray(arr:string[]){
    return[...arr]
}


function make_great(magicianArray:string[]){
    
    for(let i=0; i<magicianArray.length; i++){

       magician[i] = 'the Great ' + magicianArray[i]
       
    }
}


function show_magician(megician:string[]){

    megician.forEach(element => {
   console.log(element);
        
    });
}
const copyMagicianArray = copyArray(magician)

make_great(copyMagicianArray);


console.log('This is my orignal array:')
show_magician(magician);

console.log('This is my  modified copy of the array:')
show_magician(magician);






