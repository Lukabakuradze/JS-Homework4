let languages = ['Html', 'Javascript', 'Css', 'Python', 'Php']

let MoreThanThree = languages.filter(function (x) {
    return x.length > 3;
})
console.log(MoreThanThree);

