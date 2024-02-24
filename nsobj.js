
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
const firstCopy = original


firstCopy.name = 'asdfasdf'
// new reference created or new memory
// const firstCopy = {
//     ...original
// }

console.log('firstCopy', firstCopy)
console.log('after', original)
