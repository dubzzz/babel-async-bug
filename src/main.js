async function code(p, ...args) {
  // Works fine
  const pAwaited = await p;
  console.log(pAwaited.print(...args));

  // Works fine
  console.log((await p).print());

  // Fails with "TypeError: Cannot read property 'x' of undefined"
  console.log((await p).print(...args));
}

// Example
const instance = {
  x: 0,
  y: 1,
  print() {
    return `${this.x} ${this.y}`;
  }
};
const promiseInstance = Promise.resolve(instance);
code(promiseInstance);
