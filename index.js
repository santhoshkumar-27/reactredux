// import { compose, pipe } from 'lodash/fp'

function pressLike() {
    return 'this is called';
}

function handleFun(fn) {
    console.log(fn());
}


handleFun(pressLike);

// handle task
let input = " subscribe ";
let output = `<div>${input.trim()}</div>`

// Approch functional based

let stringTrim = sts => sts.trim();

let warpInDiv = strs => `<div>${strs}</div>`;

let warpInSpan = strs => `<span>${strs}</span>`;
/**
 * @description create a element with a input of element name and string
 */
const warpInElement = (element, content) =>  `<${element}>${content}</${element}>`;

const convertToCurringEle = element => content =>  `<${element}>${content}</${element}>`
// function compositions
console.log(warpInDiv(stringTrim(' asdfasfdasfdasdf ')))
console.log(warpInSpan(stringTrim(' asdfasfdasfdasdf ')))
console.log(warpInElement('span', stringTrim(' asdfasfdasfdasdf ')))

// for avoiding multiple compose functions

// const transform = pipe(stringTrim, warpInDiv)

// not able to send element in this approach, so we need to curring process
// const transform = pipe(stringTrim, convertToCurringEle('span'))

// currying functions
function add(a) {
    return function (b) {
        return a + b
    }
}

const add2 = a => b => a + b;
// console.log(' sdfsadfdsfsdfsd  ')
console.log('add', add2(23)(43))

const secondNumberChange = add(23);


console.log('secondNumberChange', secondNumberChange(43))
console.log('secondNumberChange', secondNumberChange(45))
console.log('secondNumberChange', secondNumberChange(87))
console.log('secondNumberChange', secondNumberChange(98))





// pure function
/**
 * @description when same input goes every time, output will be same every time
 * if doesn't change at all, its pure functions
*/

function multiply(numb) {
    return numb * 3
}


// impure function
/**
 * @description when same input goes every time, output will be vary
 * its im-pure functions, and its outwill affect by any global scope
*/

function multiply3(numb, multiply) {
    return numb * multiply
}

// immutablility
const person = {
    name: 'santhosh',
}

// person.name = 'sandy';
console.log('person', person)
// just doing shallow copy
const updated = person;

// create new reference by spread operator
const newUpdated = {
    ...updated
}
newUpdated.name = 'ssssssssss'
// changing the name
updated.name = 'new updatd'

// it updated the references
console.log('person', person)
console.log('updated', updated)
console.log('newUpdated', newUpdated)