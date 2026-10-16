// we are going to solve this using distributivity
type Letter = "a" | "b" | "c";

type RemoveC<TType> = TType  extends "c" ? never: TType
type WowWithoutC = RemoveC<Letter>



