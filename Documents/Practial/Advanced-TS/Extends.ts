const checkLength = <T extends {length:number}>(a:T,b:T):T =>{
    return a.length >= b.length ? a:b
}

console.log(checkLength("Gisaro","BillyMarru"))

type Custom<T> = T extends string ? "Yes": "No"
const a:Custom<"Hey"> = "Yes"
const b:Custom<12> = "No"

console.log(a,b)
