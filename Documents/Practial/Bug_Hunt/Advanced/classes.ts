class MinStack<T> {
  private items: T[] = [];
  private mins: T[] = [];

  push(val: T): void {
    this.items.push(val);
    if (this.mins.length === 0 || val <= this.mins[this.mins.length - 1]!) {
      this.mins.push(val);
    }
  }

  pop(): void {
    const removed = this.items.pop();
    if (removed === this.getMin()) {
      this.mins.pop();
    }
  }

  top(): T {
    return this.items[this.items.length - 1]!;
  }

  getMin(): T {
    return this.mins[this.mins.length - 1]!;
  }
}

const s = new MinStack<number>();
s.push(5);
console.log(s.getMin());