import React, { useState } from "react";

function Counter2(props) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <React.Fragment>
        <div>Count: {count}</div>
        <button onClick={() => setCount(count + 1)} />
        Increase
      </React.Fragment>
    </div>
  );
}
export default Counter2;
