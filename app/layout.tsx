import { globalStuff } from "./globalStuff";

export default function RootLayout({ children }) {
  console.log("RootLayout is rendering");
  globalStuff.init();

  return (
    <html>
      <head />
      <body>{children}</body>
    </html>
  );
}
