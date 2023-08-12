import React, { useState, Fragment } from "react";
import useDocumentTitle from "./useDocumentTitle";
function Counter(props) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  useDocumentTitle(`${name} clicks the counter ${count} times!`);
  return (
    <Fragment>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <div>
        {name} has clicked the Counter :{count} times.
      </div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </Fragment>
  );
}

export default Counter;
