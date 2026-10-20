class Animal{
    name:string
    constructor(name:string){this.name = name}
    speak():string{
        return `${this.name} Makes good sound`
    }
}

class Dog extends Animal{
    override speak(): string {
        return `${this.name} woof!!`
    }
}

const animalArr:Animal[] = [new Animal("Genric"), new Dog("Puppy")]
for(const p of animalArr) console.log(p.speak())