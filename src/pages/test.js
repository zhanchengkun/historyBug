import { history } from "umi";
export default function HomePage() {
   
  let unlisten = history.listen(({ action, location }) => { 
    history.location=location
    unlisten()
  });

 
  return (
    <div>
      test.js
      <br />
      history.location:
      {JSON.stringify(history?.location)}
    </div>
  );
}


