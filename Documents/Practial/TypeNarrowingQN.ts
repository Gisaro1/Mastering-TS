// primitive narrowing
type input = string|number|boolean|null|undefined

function describe(value:input):string{
    if(typeof  value === "string"){
        return value
    } else if(typeof value === "number"){
        return String(value)
    } else if(typeof value === "undefined"){
        return String(undefined)
    } else{
        return String(null)
    }
}

// in operator
type Dog = { kind: "dog"; bark: () => string; name: string };
type Cat = { kind: "cat"; meow: () => string; name: string };
type Animal = Dog | Cat;

function makeSound(animal: Animal):string{
    if("bark" in animal){
        return "bark"
    } else {
        return "Meow"
    }
}

//Type predicates
type StandardUser = { name: string; sessionTTL: number };
type AdminUser = StandardUser & { isAdmin: true; access: "read-admin" | "write-admin" };
type User = StandardUser | AdminUser;

const users: User[] = [
  { name: "jane", sessionTTL: 3 },
  { name: "bob", sessionTTL: Infinity, isAdmin: true, access: "read-admin" },
  { name: "leah", sessionTTL: Infinity, isAdmin: true, access: "write-admin" },
  { name: "joe", sessionTTL: 5 },
];

const adminUsers = users.filter((user): user is AdminUser =>{
    return (user as AdminUser).isAdmin
})
console.log(adminUsers)

//exhaustive switch
type Loading = { status: "loading" };
type Success = { status: "success"; data: string };
type Error   = { status: "error"; message: string };
type Result  = Loading | Success | Error;

function handle(result: Result){
    switch(result.status){
        case "loading":
            return "pending"
        case "success":
            return "done"
        case "error":
            return "something went wrong"
        default:
            const notPossible:never = result
    }
}