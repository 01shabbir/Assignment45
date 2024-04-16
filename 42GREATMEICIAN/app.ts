let megician:string[] = ['Harry Potter','Hermion Granger','Albus Demledore']

function make_great(megicianArray:string[]){
    
    for(let i=0; i<megicianArray.length; i++){

       megician[i] = 'the Great ' + megicianArray[i]
       
    }
}


function show_magician(megician:string[]){

    megician.forEach(element => {
   console.log(element);
        
    });
}
make_great(megician);
show_magician(megician)