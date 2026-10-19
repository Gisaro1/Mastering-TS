class Animal{
    name:string
    constructor(name:string){
        this.name = name
    }
    meow(){
        console.log("just kiddin")
    }
}
class Dog extends Animal{
    bark(){
        console.log("Bark")
    }
}
const dog = new Dog("Molly")
dog.meow()
// this in few words means that we used extend keyword on dog and this indicates that all properties in Animal 