class Iterator {
  constructor(items) {
    this.index = 0;
    this.items = items;
  }

  next() {
    const value = this.items[this.index++];

    if (this.hasNext()) {
      return {
        done: false,
        value,
      };
    }

    return { done: true };
  }

  hasNext() {
    return this.index <= this.items.length;
  }
}

const items = [1, 2, 3, 4, 5];
const iterable = new Iterator(items);

while (iterable.hasNext()) {
  console.log(iterable.next());
}
