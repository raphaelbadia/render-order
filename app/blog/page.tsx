import { globalStuff } from "../globalStuff";

export default async function Page() {
  const value = await globalStuff.getValue();
  console.log("Page is rendering", value);

  return (
    <div>
      <h1>My Blog {value}</h1>
    </div>
  );
}
