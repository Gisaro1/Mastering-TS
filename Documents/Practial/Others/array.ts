const first = <T>(arr: T[]) :T | undefined=> {
    return arr[0]
}
const result = first([])
if(result !== undefined){
    console.log( result)
} else {
    console.log("Oops something went wrong!!")
}