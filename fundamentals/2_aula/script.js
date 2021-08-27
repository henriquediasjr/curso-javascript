const calcAverage = (a, b, c) => (a + b + c) / 3


const scoreDolphins = (a, b, c) => {
    return calcAverage(a, b, c);   
}
const scoreKoalas = (a, b, c) => {
    return calcAverage(a, b, c);   
}
// const dolphinBetter = scoreDolphins >= 2 * scoreKoalas;
// const koalasBetter = scoreKoalas >= 2 * scoreDolphins;

const avgDolphin = scoreDolphins(45, 54, 41);

const avgKoalas = scoreKoalas(100, 100, 100);

 

if(avgDolphin >= 2 * avgKoalas) {
    console.log('Dolphins won (' + avgDolphin + ' vs ' + avgKoalas + ')')
}else if( avgKoalas >= 2 * avgDolphin){
    console.log('koalas won (' + avgKoalas + ' vs ' + avgDolphin + ')')
}else{
    console.log('no one won by doubled score')
}


