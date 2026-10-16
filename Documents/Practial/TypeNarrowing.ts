function toNumber(val:number | string):number{
    if(typeof val === "string"){
        return parseInt(val,10)
    }
    return val
}

declare function getStandardSessionToken(name:string,ttl:number):string
declare function getAdminSessionToken(name:string,accessLevel:string):string

type StandardUser = {
    name:string;
    sessionTTL:number;
}

type AdminUser = StandardUser & {
    isAdmin:true;
    access: "read-admin" | "write-admin";
}

function loginUser(user: StandardUser | AdminUser){
    if("isAdmin" in user){
        return getAdminSessionToken(user.name,user.access);
    } else {
        return getStandardSessionToken(user.name,user.sessionTTL);
    }

}

//Type predicants

type User = StandardUser | AdminUser;

const users: User[] = [
    { name: "jane", sessionTTL: 3 },
    { name: "bob", sessionTTL: Infinity, isAdmin: true, access: "read-admin" },
    { name: "leah", sessionTTL: Infinity, isAdmin: true, access: "write-admin" },
    { name: "joe", sessionTTL: 5 }
];
const standardUsers = users.filter((user): user is StandardUser =>{
    return !(user as AdminUser).isAdmin
})


//discriminated unions
type StandardUser2 = {
    type: "standard";
    name: string;
    sessionTTL: number;
}

type AdminUser2 = {
    type: "admin";
    name: string;
    access: "read-admin" | "write-admin";
}
type Prospective = {
    type:"prospective"
}

type User2 = StandardUser2 | AdminUser2 |Prospective ;

function login2(user:User2){
    switch(user.type){
        case "standard":
            return getStandardSessionToken(user.name,user.sessionTTL);
        case "admin":
            return getAdminSessionToken(user.name,user.access);
        case"prospective":
            return null
        default:
            const notPossible:never = user
            return;
    }
}