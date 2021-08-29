const mark = {
    fullName : 'Mark Miller',
    mass : 78,
    height: 1.69
}

const john = {
    fullName: 'John Smith',
    mass : 92,
    height: 1.95
}

const calcBMI = function (mass, height) {
    return mass / height ** 2
}


const markBmi = calcBMI(mark.mass, mark.height);
 
const johnBmi = calcBMI(john.mass, john.height);
 

 console.log(markBmi, johnBmi)