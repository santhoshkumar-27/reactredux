
const original = {
    name: 'asdfasdf',
    address: {
        no: 1,
        streetname: 'bhavani nagar',
        area: 'veerampattinm',
        city: 'Puducherry',
        state: 'Puducherry',
        zipcode: 605007
    }
}

console.log('original', original)
// with same reference pointed
// const firstCopy = original


// new reference created or new memory
const firstCopy = {
    ...original
}
firstCopy.name = '111111111'
// but only doing parent object modified it doesn't affect the original parent object

console.log('firstCopy', firstCopy)
console.log('after', original)
