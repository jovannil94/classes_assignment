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
