const age = 19;
const isOldEnough = age >= 18;

if(isOldEnough){
    console.log('Sarah can start driving license')
}else {
    console.log('falta '+ (age - isOldEnough) + ' anos')
}