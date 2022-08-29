import { history } from "umi";
export default function HomePage() {
  console.log(history?.location);
  return <div>test2.js<br/>
  history.location:
    {
 JSON.stringify(history?.location)
    }</div>;
}
