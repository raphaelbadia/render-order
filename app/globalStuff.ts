export const globalStuff = {
  value: undefined,
  async getValue() {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return Promise.resolve(this.value);
  },
  increment() {
    this.value++;
  },
  async init() {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    this.value = 0;
  },
};
