import { globalStuff } from "../globalStuff";
import { getI18n } from "../i18n";
import { cookies } from "next/headers";

export default async function Page() {
  cookies();
  const value = await globalStuff.getValue();
  console.log("Page is rendering", value);

  console.log((await getI18n()).hello);
  console.log((await getI18n()).hello);
  console.log((await getI18n()).hello);
  console.log((await getI18n()).hello);

  return (
    <div>
      <h1>My Blog {value}</h1>
    </div>
  );
}
