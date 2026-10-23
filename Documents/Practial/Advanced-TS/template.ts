// Basic sytanx
type World = "world";
type Greeting = `Hello ${World}`

// union-cross Multiplication

type Name = "Gisaro" | "Ishimwe" | "Mugisha"
type Last = "Billy" | "Regis"|"Benjamin"

type Union = `My name is ${Name} ${Last}`

//intrinsic string manipulation

type Str = "create" | "update"

type Capital = `on${Capitalize<Str>}`

//Template with Infer

type GettigId<T extends string> = T extends `User_${infer Id}` ? Id: never;

type ExtractId = GettigId<"User_347">
