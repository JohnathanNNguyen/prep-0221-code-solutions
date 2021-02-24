const person = {
  firstName: 'Johnathan',
  lastName: 'Nguyen',
  hobby: 'coding'
};
console.log(person);
const fullName = person.firstName + ' ' + person.lastName;
console.log('This persons name is: ' + fullName);
person.job = 'Web Developer';
console.log("This person's job is: " + person.job);
person.previousJob = 'Logistics Specialist';
console.log("This person's previous job was: " + person.previousJob);
console.log('The complete person object: ', person);

const myCar = {
  make: 'Honda',
  model: 'Accord',
  year: '2018'
};
console.log(myCar);
myCar['owner'] = fullName;
console.log(
  'My name is ' +
    myCar['owner'] +
    ' and I drive a ' +
    myCar['year'] +
    ' ' +
    myCar['make'] +
    ' ' +
    myCar['model']
);
myCar['color'] = 'white';
console.log('My full car info: ', myCar);
