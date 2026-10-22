interface Config {
  host: string;
  port: number;
  timeout: number;
}
type PartialConfig = Pick<Config,"host"|"port">
const a:Config = {
    host:"waguan",
    port:12,
    timeout: 0
}
console.log(a)
