type OptionalFlag<T> = {
    [key in keyof T]-?:T[key]
}

type RemoveFlag = {
    readonly name:string
    readonly age?:number
}

type Mapped = OptionalFlag<RemoveFlag>