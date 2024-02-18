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

let warpInDiv = strs => `<div>${strs}</div>`


console.log(warpInDiv(stringTrim(' asdfasfdasfdasdf ')))