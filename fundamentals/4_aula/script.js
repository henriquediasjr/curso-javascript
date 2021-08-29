
const carlos = {
    firstName : 'Carlos',
    lastName : 'Alberto', 
    birthYear : 1994,
    job : 'programmer',
    friends : ['tiago', 'pedro', 'augusto'],
    hasDriverLicense : true
}

// console.log('Carlos has ' + friends.length + ' friends and his best one is ' + friends[0]);// in here i have problems into putting variables inside the sentence 

console.log(` ${carlos.firstName } has ${carlos.friends.length} friends 
      and his best friend is ${ carlos.friends[0]}`) // here is much easier to put var and is multiline so if I jump a line here in the web will be the same thing 

const calcAge = function(birth) {
    return 2021-birth
} 

console.log(`${carlos.firstName} has ${ calcAge(carlos.birthYear)} years old and ${ carlos.hasDriverLicense  ? 'has' :  'doesn`t'} drivers license`)

