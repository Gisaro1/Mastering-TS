interface A{
    name:string
}
interface B extends A{
    age:number
}

const b:B = {
    name:"billy",
    age:12
}
// so Extends word work the same way on Interface as it is on Classes!!