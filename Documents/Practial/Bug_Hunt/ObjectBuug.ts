interface User {
  id: number;
  name: string;
  email: string;
  isAdmin: boolean;
}

function updateUser<T,K extends keyof T>(
  user: T,
  key: K,
  value: T[K]
): T {
  return { ...user, [key]: value };
}

const user: User = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
  isAdmin: false,
};

updateUser(user, "name", 123);
updateUser(user, "role", "admin");