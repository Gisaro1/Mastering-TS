interface Identifiable{
    id:number
}
class Repository<T extends Identifiable>{
    private items:T[] = []
    add(item:T):void{
        this.items.push(item)
    }
    getAll():T[]{
        return [...this.items]
    }
    getById(id:number): T | null{
        const item = this.items.find(current => current.id === id)
        return item ? item : null
    }
    remove(id:number):boolean{
        const initial = this.items.length
        this.items.filter(char => char.id !== id)
        return this.items.length > initial
    }
}
interface User{
    id:number
    name:string
    email:string
}
const userRepository = new Repository<User>
userRepository.add({ id: 1, name: "Alice", email: "alice@example.com" });
userRepository.add({ id: 2, name: "Bob", email: "bob@example.com" });
// console.log("All Users:", userRepository.getAll());
console.log("Find User 1:", userRepository.getById(1));

interface Product{
    id:number;
    title:string;
    price:number;
}

const productRepository = new Repository<Product>

//interface Product {
//   id: number;
//   title: string;
//   price: number;
// }

// // Instantiate the Product Repository
// const productRepository = new Repository<Product>();

// // Add Products
// productRepository.add({ id: 101, title: "Laptop", price: 999 });
// productRepository.add({ id: 102, title: "Phone", price: 499 });

// // Get All Products
// console.log("All Products:", productRepository.getAll());

// // Find Product by ID
// console.log("Find Product 102:", productRepository.getById(102));
