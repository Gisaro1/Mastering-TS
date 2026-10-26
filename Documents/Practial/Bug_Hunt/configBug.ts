interface Config {
  host: string;
  port: number;
  debug: boolean;
  maxRetries: number;
}

function setConfigValue<T,K extends keyof T>(
  config: T,
  key: K,
  value: T[K]
): T {
  return { ...config, [key]: value };
}

const config: Config = {
  host: "localhost",
  port: 3000,
  debug: true,
  maxRetries: 3,
};