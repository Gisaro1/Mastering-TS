const result:number[] = []
class Challenge {
  static solution(num: number) {
    if(num < 0) return 0
    for(let i = 1; i < num; i++){
    if(i % 5 === 0){
        result.push(i)
    }
    if(i % 3 === 0 ){
        result.push(i)
    }
    }
    return result
  }
}
Challenge.solution(15)
console.log(result.reduce((tot, num) => tot + num, 0))