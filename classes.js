//Problem 1
//a
class Person {
    constructor(firstName, lastName, middleName){
        this.firstName = firstName
        this.lastName = lastName
        this.middleName = middleName
    }
    fullName(){
        return `${this.firstName} ${this.middleName} ${this.lastName}`
    }
}
let jovanni = new Person("Jovanni", "Luna", "David")
let isaiah = new Person("Isaiah", "Collazo", "Ramon")
console.log(jovanni.firstName)
//b
console.log(jovanni.fullName() + " " + isaiah.fullName())

//Problem 2
//a
class Book{
    constructor(title, author, rating){
        this.title = title
        this.author = author
        this.rating = rating
    }
    isGood(){
        if(this.rating >= 7){
            return "true"
        }
    }
}
let nineteenEightyFour = new Book("1984", "George Orwell", 8)
let thePowerOfPostiveThinking = new Book("The Power of Postive Thinking", "Norman Vicent Peale", 5)
let ofMiceAndMen = new Book("Of Mice & Men", "John Steinbeck", 7)
//b
console.log(nineteenEightyFour.isGood())

//Problem 4
//a
class Dog {
    constructor(name, breed, mood, hungry){
        this.name = name
        this.breed = breed
        this.mood = mood
        this.hungry = hungry
    }
    playFetch(){
        this.hungry = true
        this.mood = "playful"
        console.log("Ruff!")
    }
    feed(){
        if(this.hungry === true){
            this.hungry = false
            console.log("Woof")
        } else {
            console.log("The dog doesn't look hungry")
        }
    }
    toString(){
        return `${this.name} is a ${this.breed}. They are feeling ${this.mood} and ${this.hungry}`
    }
}
let rex = new Dog("Rex", "Huskey", "Tired", false)
console.log(rex.toString())

//Problem 4
//a
let freezingPoint = {
    celsius: 0,
    fahrenheit: 32,
    kelvin: 273
}
//b
class Celsius {
    constructor(celsius){
        this.celsius = celsius
    }
    getFahrenheitTemp(){
        return this.celsius * 1.8 + 32
    }
    getKelvinTemp(){
        return this.celsius + 273
    }
    isBelowFreezing(){
        if(this.celsius <= freezingPoint.celsius){
        return true
        } else {
            return false
        }
    }
}
//c
let outsideTempt = new Celsius(10.0)
console.log(outsideTempt.isBelowFreezing())

//Problem 5
//a
class Movie {
    constructor(name, year, genre, cast, description){
        this.name = name
        this.year = year
        this.genre = genre
        this.cast = cast
        this.description = description
    }
    blurb(){
        return `${this.name} came out in ${this.year}. It was a ${this.genre} starring ${this.cast} and is about a ${this.description}`
    }
}
let laLaLand = new Movie("La La Land", 2016, "Musical", ["Ryan Gosling", "Emma Stone"], "Musical taking place in LA between two lovers")
console.log(laLaLand.blurb())


//PROBLEM 6
class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    plus(vector) {
        return new Vector(this.x + vector.x, this.y + vector.y);
    }
    minus(vector) {
        return new Vector(this.x + (vector.x * -1), this.y + (vector.y * -1));
    }
    getLength() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
}

let vector1 = new Vector(3, 4);
let vector2 = new Vector(5, 6);
// console.log(vector1.plus(vector2));
// console.log(vector1.minus(vector2));
// console.log(vector1.getLength());

// Problem 7
class Cylinder {
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    }
    getVolume() {
        return (Math.PI) * (Math.pow(this.radius, 2)) * this.height;
    }
    getSurfaceArea() {
        return 2 * (Math.PI) * (this.radius) * (this.radius + this.height);
    }
}

let cyl1 = new Cylinder(4, 4);
// console.log(cyl1.getSurfaceArea());

// Problem 8
class Post {
    constructor(datePosted, user, text) {
        this.datePosted = datePosted;
        this.user = user;
        this.text = text;
    }
    postedToday() {
        const today = new Date();
        if(this.datePosted.getDate() === today.getDate()) {
            return true;
        } else {
            return false;
        }
    }
}

let postObjs = [
    new Post(new Date(2019, 10, 21), "Flower", "I like the smell of roses"),
    new Post(new Date(2019, 10, 21), "IDontLikeFlower", "I don't."),
    new Post(new Date(2019, 10, 23), "Flower?", "Who cares?")
]

const today = new Date();

// console.log(postObjs[0].postedToday());
// console.log(postObjs.filter((post) => post.postedToday()));

// PROBLEM 9
class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
}

let mustang = new Car("Ford", "Mustang");
let mkz = new Car("Lincoln", "MKZ");