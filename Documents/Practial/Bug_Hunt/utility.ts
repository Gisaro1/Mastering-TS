interface Product {
  id: number;
  title: string;
  price: number;
  inStock: boolean;
}

function setProperty<T,K extends keyof T>(
  obj: T,
  key: K,
  value: T[K]
): T {
  return { ...obj, [key]: value };
}

const product: Product = {
  id: 42,
  title: "Keyboard",
  price: 89.99,
  inStock: true,
};

// This should be illegal but currently compiles
const bad = setProperty(product, "title","cccxlvii");