import { useState } from "react";

export default function App() {

  const [show, setShow] = useState(true);

  return (
    <div className="container">
      <button onClick={() => setShow((show) => !show)}> Show / Hide</button>
      {show ? <h1>olas</h1> : null}
    </div>
  );
}