interface Order {
  id: number;
  customer: {
    name: string;
    email: string;
  };
  total: number;
}

function updateCustomer<K extends keyof Order['customer']>(
  order: Order,
  key: K,
  value: Order['customer'][K]
): Order {
  return {
    ...order,
    customer: {
      ...order.customer,
      [key]: value,
    },
  };
}

const order: Order = {
  id: 101,
  customer: {
    name: "Billy",
    email: "billy@example.com",
  },
  total: 250,
};

// These should become errors
updateCustomer(order, "name", 123);
updateCustomer(order, "phone", "0788...");
updateCustomer(order, "total", 300); // also wrong for a different reason