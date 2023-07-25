

// class dog {

//     constructor(_type, _color) {

//         this.type = _type
//         this.color = _color
//         this.colorHist = []
//     }

//     set type(newtype) { 
//         this.__type__ = newtype
//     }

//     get type() { return this.__type__ }

//     set color(newcolor) { 
//         this.__color__ = newcolor
        
//     }

//     get color() { return this.__color__ }

//     bark() { 
//         console.log( `I make sounds and my type is "${this.type}"`)
//     }

//     describe() {
//         console.log( `i m a dog of type "${this.type}" and my color is "${this.color}"` )
//     }
// }

// let doggy = new dog('basic', 'blue')

// console.log('1 row - ' + doggy)
// console.log('2 row - ' + doggy.type)
// doggy.bark()

// doggy.type = 'oopsy'

// doggy.bark()

// doggy.type = 'newType setup'

// console.log(doggy.type)

// doggy.bark()

// console.log(doggy.color)

// doggy.color = 'white'

// console.log(doggy.color)


// class Person{
//     constructor(name){
//         console.log(`construtor is called`);
//     }
    
//     // Setter to assign value to the name attribute
//     set name(name){
//         this.name = name;
//     }
// }

// let myPers = new Person()

class listApp {
    constructor(_tag){
        this.element = _tag;
        this.listBox = [];
    }

    drop () {
        while (this.element.firstChild) {
            this.element.removeChild(this.element.firstChild)
        }
    }

    fill (_ob) {

    }
}

