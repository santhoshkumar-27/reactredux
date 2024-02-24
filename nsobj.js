
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
// const firstCopy = {
//     ...original
// }
// or
// const firstCopy = JSON.parse(JSON.stringify(original))
// or

const firstCopy = {
    ...original,
    address: {
        ...original.address
    }
}
firstCopy.name = '111111111'
// but only doing parent object modified it doesn't affect the original parent object

// now the  nest object has the same reference to the original
firstCopy.address.area = 'chinna veerampattinam'
// in order to make avoid, we need to deep copy the nested object

console.log('firstCopy', firstCopy)
console.log('after', original)
