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
// function compositions
console.log(warpInDiv(stringTrim(' asdfasfdasfdasdf ')))
// console.log(warpInSpan(stringTrim(' asdfasfdasfdasdf ')))

// for avoiding multiple compose functions

const transform = pipe(stringTrim, warpInDiv)

console.log(' sdfsadfdsfsdfsd  ')