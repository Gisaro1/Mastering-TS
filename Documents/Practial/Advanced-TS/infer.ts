function sum(a:number,b:number):number
function sum(a:string,b:string):string

function sum(a:number | string, b:number | string){
    if(typeof a === "number" && typeof b === "number"){
        return a  + b
    }
        return `${parseInt(`${a}`,10)} + ${parseInt(`${b}`,10)}`
}
const sumNum = sum(10,10)
const sumStr = sum("10","10")
type result = ReturnType<typeof sum>
console.log(sumNum,typeof sumNum)
console.log(sumStr,typeof sumStr)

/// this is  more of functon overloads