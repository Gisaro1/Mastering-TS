//object related utility types
type User = {
  id: string
  name: string
  age: number
  address?: {
    street: string
    city: string
  }
}
function createUserWithAddress(user:Required<User>){} //here we used a type named Required whic is used when we do want to make property not optional
function createUser(user: Omit<User,"id">) {} // here we have the second UT which is Omit and it's the opposite of pick because it does recieve the two argument and Type and things to be removed
function updateUser(user: Partial<User>) {} // here this allows a user to update the type by making every property optional
function renderUserDetails(user: Pick<User,"name" | "age">) { // This Pick is a utility type  which is used when we want to select random thing in Type alias
// one thing I can add on is that if we add an object with full stuff it would still work normal !!
  console.log(user.name, user.age)
}
renderUserDetails({name:"gisaro",age:12}) // as yo can see it doesn't throw an error
createUser({name:"gisaro",age:12,address:{street:"asd",city:"sdf"}}) // here it doesn't throw an error
updateUser({name:"billy"})
