// STEP 1
/*function Cat() {

}
const Dog = function () {

}*/
// STEP 2
/*function Cat() {

}
const Dog = function () {

}
const myCat = new Cat()
const myDog = new Dog()*/

// STEP 3
/*const Animal = function () {
    alert('The Animal has been created')
}
const dog = new Animal()*/

// STEP 4
/*const Animal = function (noise) {
    alert(noise)
}
const dog = new Animal('The Animal has been created')*/

// STEP 5
/*const Animal = function (type, breed, color, height, length) {
    this._type = type
    this._breed = breed
    this._color = color
    this._height = height
    this._length = length
    window.console.log(`${this._type} is a ${this._breed} ${this._color} ${this._height} ${this._length}.`);
}
const Cat = new Animal('Cat', 'Bengal', 'White', '10inches height', '18 inches length')*/

// STEP 6
/*const Animal = function (type, breed, color, height, length) {
    this._type = type
    this._breed = breed
    this._color = color
    this._height = height
    this._length = length
}
const cat = new Animal('Cat', 'Bengal', 'White', '10', '18')
for (let i = 0; i < cat.length; i +=1) {
    window.console.log(i + ' : ' + cat[i])
}*/

// STEP 7
/*const Animal = function (type, breed, color, height, length) {
    this._type = type;
    this._breed = breed;
    this._color = color;
    this._height = height;
    this._length = length;
}
Animal.prototype.speak = function () {
    if (this._type.toLowerCase() === 'dog') {
        return 'The ' + this._color.toLowerCase() + ' dog is barking!';
    } else {
        return 'The ' + this._color.toLowerCase() + ' cat is meowing!';
    }
};
const dog = new Animal('Dog', 'Bengal', 'White', '10', '18');
const cat = new Animal('Cat', 'Bengal', 'Black', '10', '18')
console.log(dog.speak());
console.log(cat.speak());
*/
// STEP 8
/*const Animal = function (type, breed, color, height, length) {
    this._type = type;
    this._breed = breed;
    this._color = color;
    this._height = height;
    this._length = length;
    let checkType = function () {
        if (type.toLowerCase() === 'dog') {
            return 'dog';
        } else {
            return 'cat';
        }
    };
    this.speak = function () {
        return checkType();
    };
};
const pet = new Animal('Cat', 'Bengal', 'White', '10', '18')
console.log('The ' + pet.speak() + ' has made a noise!');
*/

// STEP 9
/*String.prototype.numWords = function (findWords) {
    let haystack = [], total = 0, needle;
    haystack = this.split(' ');
    for (needle = 0; needle < haystack.length; needle++) {
        if (haystack[needle].toLowerCase() === findWords.toLowerCase()) {
            total += 1;
        }
    }
    return total;
};
let message = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';
console.log(message.numWords('lorem'));*/