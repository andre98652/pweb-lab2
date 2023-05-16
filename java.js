console.log("hola\n");


console.log(arrayGenerator(5,10,15));

function arrayGenerator(n,min,max){
    let a = [];
    for(let x=0; x<n; x++){
        a.push(Math.ceil(Math.random()*(max-min)+min));

    }
    return a;
}
