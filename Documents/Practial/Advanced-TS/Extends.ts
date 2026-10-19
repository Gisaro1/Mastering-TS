type A ={
    name:string
}
type C ={
    email:string
}
type B = A & C & {
    age:number
}

const b:B = {
    name:"billy",
    age:12,
    email:"gisaroblanks@gmail.com"
}
// so Extends word work the same way on Interface as it is on Classes!!