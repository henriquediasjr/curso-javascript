// for (let exercise = 1; exercise <=3 ; exercise++){
//     console.log(`--------- Starting exercises ${exercise}`)
//     for(let rep = 1; rep <= 5; rep++){
//         console.log(`Lifting weight repetition ${rep}`)
//     }
// }



let dice = Math.trunc(Math.random() * 6) + 1;


while(dice !== 6){
    console.log(`You rolled a ${dice}`)
    dice = Math.trunc(Math.random() * 6) + 1;
    if(dice === 6) console.log('Loop is about to end...')
}