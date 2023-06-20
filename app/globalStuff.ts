export const globalStuff = {
  value: undefined,
  async getValue() {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return Promise.resolve(this.value);
  },
  async init() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    this.value = "initialized";
  },
};
