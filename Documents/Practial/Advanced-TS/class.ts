class Point{
    _length = 0
    get length():number{
        return this._length
    }
    set Length(value:number){
        this._length = value // for a setter it cannot return
    }
}