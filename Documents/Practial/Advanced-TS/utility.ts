interface Config {
  host: string;
  port: number;
  timeout: number;
}
const a:Pick<Config,"host" | "port"> = {
    host:"waguan",
    port:12,
}
console.log(a)
// this is a string dictonary
const b:Record<number,boolean> = {
  12:true,
  11:false,
  13:true
}
//inline unions

const c:Record<"Name" | "age" | "married",string | number> = {
  age:12,
  married:"no",
  Name:"gisaro"
}

type A = "Billy" | "we"
interface B{
  name:string;
  age:string
}

type C = Record<B,A>

// from what I have found from inline union we can even arrange them the way we want!!

/* so in summary is like you want to create an Object and it's key will come from first argument passed in Record and their data type will be the second argument that you pass in Record utility type*/
