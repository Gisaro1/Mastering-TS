interface Product {
  id: number;
  title: string;
  price: number;
  inStock: boolean;
}

function updateProductInList<K extends keyof Product>(
  products: Product[],
  id: number,
  key: K,
  value: Product[K]
): Product[] {
  return products.map((p) =>
    p.id === id ? { ...p, [key]: value } : p
  );
}

const products: Product[] = [
  { id: 1, title: "Keyboard", price: 99, inStock: true },
];

// These should become errors
updateProductInList(products, 1, "price", "99");
updateProductInList(products, 1, "color", "black");