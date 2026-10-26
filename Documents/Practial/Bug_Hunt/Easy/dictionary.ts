type StringDict = {
  [key: string]: string;
};

function updateDict<T,K extends keyof T>(
  dict: T,
  key: K,
  value: T[K]
): T {
  return { ...dict, [key]: value };
}

const dict: StringDict = {
  name: "Gisaro",
  city: "Kigali",
};

updateDict(dict, "name", "100");