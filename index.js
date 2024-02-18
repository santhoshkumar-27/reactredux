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
const warpInElement = (element, content) =>  `<${element}>${content}</${element}>`
// function compositions
console.log(warpInDiv(stringTrim(' asdfasfdasfdasdf ')))
console.log(warpInSpan(stringTrim(' asdfasfdasfdasdf ')))
console.log(warpInElement('span', stringTrim(' asdfasfdasfdasdf ')))

// for avoiding multiple compose functions

// const transform = pipe(stringTrim, warpInDiv)

// not able to send element in this approach
// const transform = pipe(stringTrim, warpInElement)

console.log(' sdfsadfdsfsdfsd  ')