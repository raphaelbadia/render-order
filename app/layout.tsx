import { globalStuff } from "./globalStuff";

export default async function RootLayout({ children }) {
  console.log("RootLayout starts to render");
  await globalStuff.init();
  console.log("RootLayout waited 1000ms to render");

  return (
    <html>
      <head />
      <body>{children}</body>
    </html>
  );
}
