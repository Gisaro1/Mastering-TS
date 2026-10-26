function solution(number:number):string{
    if(number < 1 || number > 3999) return"";
const romansNum= [
  { symbol: 'I', value: 1 },
  { symbol: 'V', value: 5 },
  { symbol: 'X', value: 10 },
  { symbol: 'XX', value: 20 },
  { symbol: 'XXX', value: 30 },
  { symbol: 'XL', value: 40 },
  { symbol: 'L', value: 50 },
  { symbol: 'LX', value: 60 },
  { symbol: 'LXX', value: 70 },
  { symbol: 'LXXX', value: 80 },
  { symbol: 'XC', value: 90 },
  { symbol: 'C', value: 100 },
  { symbol: 'CC', value: 200 },
  { symbol: 'CCC', value: 300 },
  { symbol: 'CD', value: 400 },
  { symbol: 'D', value: 500 },
  { symbol: 'DC', value: 600 },
  { symbol: 'DCC', value: 700 },
  { symbol: 'DCCC', value: 800 },
  { symbol: 'CM', value: 900 },
  { symbol: 'M', value: 1000 },
  { symbol: 'MM', value: 2000 },
  { symbol: 'MMM', value: 3000 },
  { symbol: 'II', value: 2 },
  { symbol: 'III', value: 3 },
  { symbol: 'IV', value: 4 },
  { symbol: 'VI', value: 6 },
  { symbol: 'VII', value: 7 },
  { symbol: 'VIII', value: 8 },
  { symbol: 'IX', value: 9 }
];
    let numStr = number.toString()
    let split = numStr.split('').map((char,index) => {
        const zeroAdd = numStr.length-1 - index
        return char + "0".repeat(zeroAdd)
    })
    const holder:string[] = []
    let result = split.map(char => {
        romansNum.map(obj =>{
            if(Number(char) === obj.value){
                holder.push(obj.symbol)
            }
            return holder
        })
    })
    return holder.join('')
};
console.log(solution(800))