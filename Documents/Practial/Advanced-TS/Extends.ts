interface APIresponse{
    name:string
    age:string
    gender:number
}

interface User extends Omit<APIresponse,"age"|"gender">{
    age:number
    gender:string
}

const fetching = (data:APIresponse):User => {
    return{...data,age:Number(data.age),gender:String(data.gender)}
}

const u = fetching({name:"Gisaro",age:"34",gender:347})
console.log(u.age + 1)