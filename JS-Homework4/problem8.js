let words = ['Madrid', 'Rome', 'Milan', 'Berlin'];

let newArray = words.filter(function (x) {
    return x.includes('M', 'm')
})
console.log(newArray);

