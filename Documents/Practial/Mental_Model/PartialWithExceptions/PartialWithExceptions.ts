interface Config {
  host: string;
  port: number;
  timeout: number;
}
type PartialConfig = Partial<Config>
type Optional = Required<Pick<PartialConfig,"host">>  & Omit<PartialConfig,"host">

const a:Optional = {
    port:12,
    timeout:12
}
// host must be present; port and timeout are optional