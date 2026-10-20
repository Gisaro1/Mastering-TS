interface Animal{
    name:string
    color: string | null
}

interface Dog extends Animal{
    name:"max"
    color:string
}

interface Label extends Animal{
    name:number
}