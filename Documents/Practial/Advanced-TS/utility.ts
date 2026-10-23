interface Config {
  host: string;
  port: number;
  timeout: number;
}
const a:Pick<Config,"host" | "port"> = {
    host:"waguan",
    port:12,
}
console.log(a)

const b:Record<number,boolean> = {
  12:true,
  11:false,
  13:true
}
// this is a string dictonary