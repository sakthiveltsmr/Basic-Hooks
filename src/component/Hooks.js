import React from "react";

function Hooks() {
  const [state, setState] = React.useState({
    count: 0,
    name: "Tamil",
  });
  const Increment = () => setState({ ...state, count: state.count + 1 });
  const Decrement = () => setState({ ...state, count: state.count - 1 });
  const Reset = () => setState({ ...state, count: 0 });
  const Change = () => setState({ ...state, name: "Sakthivel" });

  //   const [count, setcount] = React.useState(10);
  //   const Increment = () => setcount(count + 1);
  //   const Decrement = () => setcount(count - 1);
  //   const Reset = () => setcount(0);

  return (
    <div
    //   style={{
    //     height: "400px",
    //     width: "400px",
    //     border: "none",
    //     background: "rose",
    //   }}
    >
      <h1>Count : {state.count}</h1>
      <div>
        <button
          style={{
            padding: "15px",
            margin: "10px",
            border: "none",
            boxShadow: "2px 4px 3px #000",
            borderRadius: "20px",
            background: "green",
            cursor: "pointer",
          }}
          onClick={Increment}
        >
          Increment
        </button>
        <button
          style={{
            padding: "15px",
            margin: "10px",
            border: "none",
            boxShadow: "2px 4px 3px #000",
            borderRadius: "20px",
            background: "yellow",
            cursor: "pointer",
          }}
          onClick={Decrement}
        >
          Decrement
        </button>
        <button
          style={{
            padding: "15px",
            margin: "10px",
            border: "none",
            boxShadow: "2px 4px 3px #000",
            borderRadius: "20px",
            background: "red",
            cursor: "pointer",
          }}
          onClick={Reset}
        >
          Reset
        </button>
      </div>
      <h2>Name : {state.name}</h2>
      <button
        style={{
          padding: "15px",
          margin: "10px",
          border: "none",
          boxShadow: "2px 4px 3px #000",
          borderRadius: "20px",
          background: "hotpink",
          cursor: "pointer",
        }}
        onClick={Change}
      >
        Change
      </button>
    </div>
  );
}

export default Hooks;
