async function code(p, methodName, ...args) {
  // Works fine
  const pAwaited = await p;
  console.log(pAwaited[methodName](...args));

  // Fails with "TypeError: Cannot read property 'x' of undefined"
  console.log((await p)[methodName](...args));
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
code(promiseInstance, "print");
