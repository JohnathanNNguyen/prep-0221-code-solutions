const languagesArray = ['html', 'css', 'javascript', 'react', 'node.js'];
console.log(languagesArray);
console.log(languagesArray.length);
languagesArray.push('c#', 'php');
console.log(languagesArray);
languagesArray.pop();
console.log(languagesArray);
languagesArray.unshift('c++');
console.log(languagesArray);
languagesArray.shift();
console.log(languagesArray);
const thirdElement = languagesArray[2];
console.log('The third element is ' + thirdElement);
const arrayLength = languagesArray.length;
console.log(arrayLength);
const lastItem = languagesArray[languagesArray.length - 1];
console.log(lastItem);
