interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

function updateFields<T>(
  user: T,
  updates: Partial<T>
): T {
  return { ...user, ...updates };
}

const user: User = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
  age: 28,
};