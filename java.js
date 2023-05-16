console.log("hola\n");


console.log(arrayGenerator(5,10,15));

function arrayGenerator(n,min,max){
    let a = [];
    for(let x=0; x<n; x++){
        a.push(Math.ceil(Math.random()*(max-min)+min));

    }
    return a;
}

console.log("\n\nPrueba 2");

let votes =[
    {id:1, votes:10},
    {id:2, votes:30},
    {id:3, votes:15},
    {id:4, votes:8}
];

function votesCouting(votes){
    let win=0;
    let menor=0;
    for(let i=0;i<votes.length;i++){
        if(menor<votes[i].votes){
            win=i;
        }

    }
    return votes[win];
}
console.log(votesCouting(votes));