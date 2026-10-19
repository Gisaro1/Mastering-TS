"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Repository {
    items = [];
    add(item) {
        this.items.push(item);
    }
    getAll() {
        return [...this.items];
    }
    getById(id) {
        const item = this.items.find(current => current.id === id);
        return item ? item : null;
    }
    remove(id) {
        const initial = this.items.length;
        this.items.filter(char => char.id !== id);
        return this.items.length > initial;
    }
}
const userRepository = new Repository;
userRepository.add({ id: 1, name: "Alice", email: "alice@example.com" });
userRepository.add({ id: 2, name: "Bob", email: "bob@example.com" });
// console.log("All Users:", userRepository.getAll());
console.log("Find User 1:", userRepository.getById(1));
//# sourceMappingURL=day1.js.map