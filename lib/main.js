function code(p, methodName) {
  return async (...args) => console.log((await (await p)[methodName](...args)));
} // Example


const instance = {
  x: 0,
  y: 1,

  async print() {
    return Promise.resolve(`${this.x} ${this.y}`);
  }

};
const promiseInstance = Promise.resolve(instance);
code(promiseInstance, "print")();