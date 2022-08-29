import { history } from "umi";
export default function HomePage() { 
  console.log(history?.location);
  return <div>test</div>;
}
