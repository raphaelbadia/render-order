class I18n {
  hello: string;

  constructor(params: { hello: string }) {
    console.log("constructor i18n", params.hello);
    this.hello = params.hello;
  }
}

export function setupI18n(params: { hello: string }) {
  console.log("setupI18n", params.hello);
  return new I18n(params);
}
